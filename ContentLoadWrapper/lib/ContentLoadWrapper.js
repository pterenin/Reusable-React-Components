!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-svg-icons"),require("react")):"function"==typeof define&&define.amd?define(["dnn-svg-icons","react"],t):"object"==typeof exports?exports.ContentLoadWrapper=t(require("dnn-svg-icons"),require("react")):e.ContentLoadWrapper=t(e["dnn-svg-icons"],e.react)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(6),s=o(l),d=n(5);n(4);var u=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={percent:0},e.timeout=50,e.delta=1,e.setTimeout=null,e}return i(t,e),p(t,[{key:"componentDidMount",value:function(){setTimeout(this.increase.bind(this),100),this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentWillReceiveProps",value:function(e){e.loadComplete&&(clearTimeout(this.setTimeout),this._isMounted&&this.setState({percent:100},function(){}),setTimeout(function(){"function"==typeof e.onCompleteCallback&&e.onCompleteCallback()},300)),e.loadError&&(clearTimeout(this.setTimeout),this._isMounted&&this.setState({percent:100},function(){}),setTimeout(function(){"function"==typeof e.onErrorCallback&&e.onErrorCallback()},300))}},{key:"increase",value:function(){var e=this.state.percent;e++,this.timeout*=this.delta,this.delta*=1,e<=100&&this._isMounted&&this.setState({percent:e}),e<95&&(this.setTimeout=setTimeout(this.increase.bind(this),this.timeout))}},{key:"onTryAgain",value:function(){var e=this;this.setState({percent:0},function(){setTimeout(e.increase.bind(e),100)}),"function"==typeof this.props.onTryAgain&&this.props.onTryAgain()}},{key:"render",value:function(){var e=this.state.percent,t="dnn-content-load-wrapper"+(this.props.loadComplete?" complete":"")+(this.props.loadError?" upload-error":"");return"undefined"==typeof this.props.loadComplete||this.props.loadComplete?this.props.children:s["default"].createElement("div",{className:t},this.props.svgSkeleton,this.props.loadError&&s["default"].createElement("div",{className:"try-load-again"},s["default"].createElement("div",null,s["default"].createElement("div",{className:"upload-icon",dangerouslySetInnerHTML:{__html:d.ErrorStateIcon}}),s["default"].createElement("p",null,this.props.failedToLoadText),s["default"].createElement("span",{onClick:this.onTryAgain.bind(this)},"[",this.props.tryAgainText,"]"))),s["default"].createElement("div",{className:"upload-bar-container"},s["default"].createElement("div",{className:"upload-bar-box"},s["default"].createElement("div",{className:"upload-bar",style:{width:e+"%"}}))))}}]),t}(l.Component);t["default"]=u,u.propTypes={loadComplete:l.PropTypes.bool.isRequired,failedToLoadText:l.PropTypes.string,children:l.PropTypes.node,svgSkeleton:l.PropTypes.node,tryAgainText:l.PropTypes.string,loadError:l.PropTypes.bool,onTryAgain:l.PropTypes.func},u.defaultProps={failedToLoadText:"Failed To Load",tryAgainText:"Retry"}},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}@keyframes placeHolderShimmer{0%{background-position:-105px 0}to{background-position:105px 0}}.dnn-content-load-wrapper{padding:12px;transition:opacity .4s .6s;position:relative;width:100%}.dnn-content-load-wrapper.upload-error{background-color:hsla(0,0%,100%,.5)}.dnn-content-load-wrapper.upload-error .try-load-again{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.dnn-content-load-wrapper.upload-error .try-load-again>div{max-width:300px;margin:0 auto;position:relative;top:50%;transform:translateY(-50%)}.dnn-content-load-wrapper.upload-error .try-load-again>div>p{margin:10px 0}.dnn-content-load-wrapper.upload-error .try-load-again>div>div.upload-icon{width:40px;height:40px;margin:0 auto}.dnn-content-load-wrapper.upload-error .try-load-again>div>div.upload-icon>svg,.dnn-content-load-wrapper.upload-error .try-load-again>div>div.upload-icon>svg:hover{fill:#959695}.dnn-content-load-wrapper.upload-error .try-load-again span{float:none;color:#1e88c3;cursor:pointer}.dnn-content-load-wrapper.upload-error .upload-bar-container .upload-bar-box{background:#c8c8c8}.dnn-content-load-wrapper .upload-bar-container{width:105px;height:20px;background:transparent;box-sizing:border-box;margin:16px auto 0}.dnn-content-load-wrapper .upload-bar-container .upload-file-name{margin-bottom:10px}.dnn-content-load-wrapper .upload-bar-container .upload-icon{width:42px;height:42px;margin:auto}.dnn-content-load-wrapper .upload-bar-container .upload-icon svg{margin-top:8px;margin-bottom:3px}.dnn-content-load-wrapper .upload-bar-container h4{color:#1e88c3;margin:auto;text-align:center;font-size:14px;margin:15px 10px 10px}.dnn-content-load-wrapper .upload-bar-container .upload-bar-box{position:relative;float:left;width:100%;height:5px;background:#eff0f0;margin-top:5px}.dnn-content-load-wrapper .upload-bar-container .upload-bar-box .upload-bar{width:0;float:left;height:100%;left:0;transition:.1s;animation-duration:1.4s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer;animation-timing-function:linear;width:105px;background:#9fdbf0;background-image:linear-gradient(90deg,#9fdbf0 0,#eaf1fa 35%,#9fdbf0);background-size:105px 5px;height:5px;position:relative}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<t.length;r++){var i=t[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=f[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(s(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(s(o.parts[a],t));f[o.id]={id:o.id,refs:1,parts:i}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],a=r[0],i=r[1],p=r[2],l=r[3],s={css:i,media:p,sourceMap:l};n[a]?n[a].parts.push(s):t.push(n[a]={id:a,parts:[s]})}return t}function a(e,t){var n=v(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function p(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function s(e,t){var n,o,r;if(t.singleton){var a=b++;n=g||(g=p(t)),o=d.bind(null,n,a,!1),r=d.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=c.bind(null,n),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),o=u.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function d(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var p=n[i],l=f[p.id];l.refs--,a.push(l)}if(e){var s=r(e);o(s,t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete f[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t}])});