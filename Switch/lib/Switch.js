!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-tooltip"),require("react")):"function"==typeof define&&define.amd?define(["dnn-tooltip","react"],t):"object"==typeof exports?exports.Switch=t(require("dnn-tooltip"),require("react")):e.Switch=t(e["dnn-tooltip"],e.react)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(6),l=o(c),p=n(5),f=o(p);n(4);var u=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={switchActive:e.value,innerStateSet:!1},n}return a(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({switchActive:e.value})}},{key:"toggleStatus",value:function(){var e=this.props,t=this.state;e.readOnly||"function"==typeof this.props.onChange&&e.onChange(!t.switchActive)}},{key:"getClassName",value:function(){var e=this.props,t="dnn-switch";return e.value&&(t+=" dnn-switch-active"),e.readOnly&&(t+=" dnn-switch-readonly"),e.labelHidden||(t+=" place-"+e.labelPlacement),t}},{key:"renderComponent",value:function(){var e=this.props,t=this.state;return e.labelHidden?l["default"].createElement("span",{className:this.getClassName(),onClick:this.toggleStatus.bind(this)},l["default"].createElement("span",{className:"mark"})):l["default"].createElement("div",{className:"switch-button"},l["default"].createElement("label",{className:"on-off-text place-"+e.labelPlacement},t.switchActive?e.onText:e.offText),l["default"].createElement("span",{className:this.getClassName(),onClick:this.toggleStatus.bind(this)},l["default"].createElement("span",{className:"mark"})))}},{key:"render",value:function(){var e=this.props,t=e.tooltipMessage instanceof Array?e.tooltipMessage:[e.tooltipMessage];return l["default"].createElement("div",{className:"dnn-switch-container"},e.label&&l["default"].createElement("span",{className:"switch-label"},e.label),l["default"].createElement(f["default"],{messages:t,type:"info",className:e.placement,tooltipPlace:e.tooltipPlace,rendered:e.tooltipMessage}),this.renderComponent())}}]),t}(c.Component);u.propTypes={value:c.PropTypes.bool,labelHidden:c.PropTypes.bool,onText:c.PropTypes.string,offText:c.PropTypes.string,label:c.PropTypes.string,onChange:c.PropTypes.func,readOnly:c.PropTypes.bool,labelPlacement:c.PropTypes.oneOf(["left","right"]),tooltipMessage:c.PropTypes.oneOfType([c.PropTypes.string,c.PropTypes.array]),placement:c.PropTypes.string,tooltipPlace:c.PropTypes.string},u.defaultProps={onText:"On",offText:"Off",labelPlacement:"left"},t["default"]=u},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-switch-container{float:left;padding:5px 0}.dnn-switch-container .dnn-ui-common-tooltip{float:left;margin-left:10px}.dnn-switch-container .dnn-ui-common-tooltip .tooltip-text{max-width:255px;text-align:center;padding:7px 15px}.dnn-switch-container .dnn-ui-common-tooltip svg{width:20px;height:20px}.dnn-switch-container .switch-label{padding-top:1px;color:#46292b;font-size:13px;font-weight:700;float:left}.dnn-switch-container .switch-button{float:right}.dnn-switch-container .switch-button .on-off-text{margin-top:2px;color:#46292b}.dnn-switch-container .switch-button .on-off-text.place-left{float:left}.dnn-switch-container .switch-button .on-off-text.place-right{float:right}.dnn-switch-container .dnn-switch{display:inline-block;position:relative;width:45px;height:21px;border-radius:14px;border:1px solid #959695;background-color:#c8c8c8;margin:0;cursor:pointer;transition:background .1s linear;box-sizing:content-box!important;-moz-box-sizing:content-box!important}.dnn-switch-container .dnn-switch.place-left{margin-left:8px}.dnn-switch-container .dnn-switch.place-right{margin-right:8px}.dnn-switch-container .dnn-switch.dnn-switch-active{background-color:#21a3da;border-color:#226f9b}.dnn-switch-container .dnn-switch.dnn-switch-active .mark{left:24px;border-color:#226f9b}.dnn-switch-container .dnn-switch.dnn-switch-readonly{border:1px solid #e5e7e6;cursor:not-allowed;background-color:#e5e7e6}.dnn-switch-container .dnn-switch.dnn-switch-readonly .mark{border:1px solid #e5e7e6;background-color:#eff0f0}.dnn-switch-container .dnn-switch .mark{width:21px;height:21px;display:inline-block;border-radius:13px;background-color:#fff;border:1px solid #959695;position:absolute;top:0;left:0;box-sizing:border-box;transition:left .1s linear,background-color .1s linear,border-color .1s linear}.dnn-switch-container .dnn-switch .mark img{display:none}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=d[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(l(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(l(o.parts[i],t));d[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],s=r[2],c=r[3],l={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=g(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var n,o,r;if(t.singleton){var i=v++;n=m||(m=s(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=u.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=f.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function p(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=d[s.id];c.refs--,i.push(c)}if(e){var l=r(e);o(l,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete d[c.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t}])});