/*
 * Toggles show/hide of a component
 * Displays button when component is hidden, "x" when component is visible
 * Use onHide and onShow listeners to trigger
 */

import { Component } from '../component.decorator';
import {IScope} from 'angular';

@Component({
    bindings: {
        onHide: '&',
        onShow: '&'
    },
    templateUrl: require('./toggle-show.component.html')
})
export default class HideCodeComponent {
    hidden: boolean;
    onHide: () => void;
    onShow: () => void;

    static $inject = ['$scope'];
    constructor(private $scope: IScope) {
        this.hidden = true;
    }

    hideCode() {
        this.onHide();
        this.hidden = true;
    }

    showCode() {
        this.onShow();
        this.hidden = false;
    }
}
