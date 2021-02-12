/*! For license information please see 2.73f1dc10.chunk.js.LICENSE.txt */
(this.webpackJsonpnotesapp=this.webpackJsonpnotesapp||[]).push([[2],{150:function(e,t,n){"use strict";var o=function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.create;Object.create;var r=n(0),a=n.n(r);var l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.create;Object.create;var i=function(e){var t=function(t,n){return a.a.createElement(e,l({},t,{forwardedRef:n}))},n=e.displayName||e.name;return t.displayName="withForwardedRef("+n+")",Object(r.forwardRef)(t)},u=function(e,t){if(t){var n="hidden",o=window.getComputedStyle(t).maxHeight;if("none"!==o)parseFloat(o)<t.scrollHeight&&(n="");t.style.height="0",t.style.overflowY=n,t.style.height=function(e,t){var n=window.getComputedStyle(t),o=n.borderBottomWidth,r=n.borderTopWidth,a=n.fontSize,l=n.lineHeight,i=n.paddingBottom,u=n.paddingTop,c="normal"===l?1.2*parseFloat(a):parseFloat(l),s=0===e?0:c*e+parseFloat(o)+parseFloat(r)+parseFloat(i)+parseFloat(u),p=t.scrollHeight+parseFloat(o)+parseFloat(r);return Math.max(s,p)}(e,t)+"px"}};t.a=i((function(e){var t=e.forwardedRef,n=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["forwardedRef"]),l=t||Object(r.createRef)(),i=n.rows?parseInt(""+n.rows,10):0,c=n.onChange,s=n.onInput;Object(r.useEffect)((function(){u(i,l.current)}),[l,i]);var p=Object(r.useCallback)((function(e){c&&c(e),s&&s(e),u(i,l.current)}),[c,s,l,i]);return a.a.createElement("textarea",o({},n,{onInput:p,ref:t||l,rows:i}))}))},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),u=(o=i)&&o.__esModule?o:{default:o};var c={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var o=void 0;return o=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:o},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==("undefined"===typeof t?"undefined":a(t))&&(t={default:parseInt(t)||2});var n=1/0,o=t.default||2;for(var r in t){var l=parseInt(r);l>0&&e<=l&&l<n&&(n=l,o=t[r])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),o=0;o<n.length;o++){var r=o%e;t[r]||(t[r]=[]),t[r].push(n[o])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,o=void 0===n?{}:n,a=e.columnClassName,l=this.itemsInColumns(),i=100/l.length+"%",c=a;"string"!==typeof c&&(this.logDeprecated('The property "columnClassName" requires a string'),"undefined"===typeof c&&(c="my-masonry-grid_column"));var s=r({},t,o,{style:r({},o.style,{width:i}),className:c});return l.map((function(e,t){return u.default.createElement("div",r({},s,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),o=t;return"string"!==typeof t&&(this.logDeprecated('The property "className" requires a string'),"undefined"===typeof t&&(o="my-masonry-grid")),u.default.createElement("div",r({},n,{className:o}),this.renderColumns())}}]),t}(u.default.Component);s.defaultProps=c,t.default=s}}]);
//# sourceMappingURL=2.73f1dc10.chunk.js.map