/*
 * Dynamically creates a code block that matches the element
 * Shows/hides the code block per user input
 */

import {element, IAttributes, IAugmentedJQuery, ICompileService, IScope} from 'angular';
import {IRepeatAsCodeService} from '../services/repeat-as-code.service';

export class ToggleRepeatCodeController {
    hidden: boolean;

    static $inject = ['$scope'];

    constructor(private $scope: IScope) {
        this.hidden = true;
    }

    show() {
        this.hidden = false;
    }

    hide() {
        this.hidden = true;
    }
}

export default ['RepeatAsCodeService', '$compile', ToggleRepeatDirective];

export function ToggleRepeatDirective(RepeatAsCodeService: IRepeatAsCodeService, $compile: ICompileService) {
    return {
        controller: ToggleRepeatCodeController,
        controllerAs: '$ctrl',
        priority: 1000,
        restrict: 'A',
        scope: {
            toggleRepeatCode: '@',
        },
        compile: (tElement: IAugmentedJQuery, tAttrs: IAttributes) => {
            // Highlight code
            tElement.removeAttr('toggle-repeat-code');
            let code = RepeatAsCodeService(tElement, tAttrs.toggleRepeatCode);
            let codeElement = element(`<div class="prism-toggleable-code"></div>`).append(code);

            // Create an element containing the code and a toggle-show directive
            codeElement.attr('ng-class', `[{'prism-hidden': $ctrl.hidden}]`);
            let toggleShow = element(`<toggle-show on-hide="$ctrl.hide()" on-show="$ctrl.show()"></toggle-show>`);
            let parent = element(`<div></div>`);
            parent.append(toggleShow);
            parent.append(codeElement);
            let linkFn = $compile(parent, null, 100);

            // Bind the directive to this controller
            return (scope: IScope, iElement: IAugmentedJQuery) => {
                let content = linkFn(scope);
                iElement.after(content);
            };
        }
    };
}
