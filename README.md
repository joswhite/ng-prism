# ng-prism

### Installation

- `npm install joswhite/ng-prism`
- `angular.module('myApp', ['ng-prism']);`
- `<script src="ng-prism.js">`<br>
  `<link rel="stylesheet" href="ng-prism.css">`

### Use

- Use Prism directly - http://prismjs.com (the example below highlights Javascript code)<br>
  `<pre><code class="language-javascript">...</code></pre>`
  
- `repeat-as-code` directive - repeats HTML as highlighted code immediately after tag:<br>
  `<tag repeat-as-code>...</tag>` becomes HTML &lt;tag&gt;...&lt;/tag&gt; followed by code `<tag>...</tag>`
   * `repeat-as-code="inner"` - uses inner HTML for code block
    
### Development

Run `gulp` and navigate to localhost:8080. 

### Notes

- ng-prism converts 4 spaces to the tab character 
- This project uses [jedwardhawkins/ng-gulp](https://www.github.com/jedwardhawkins/ng-gulp).