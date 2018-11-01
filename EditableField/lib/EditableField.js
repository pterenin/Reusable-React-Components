!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-multi-line-input-with-error"),require("dnn-single-line-input-with-error"),require("dnn-svg-icons"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["dnn-multi-line-input-with-error","dnn-single-line-input-with-error","dnn-svg-icons","react","react-dom"],t):"object"==typeof exports?exports.EditableField=t(require("dnn-multi-line-input-with-error"),require("dnn-single-line-input-with-error"),require("dnn-svg-icons"),require("react"),require("react-dom")):e.EditableField=t(e["dnn-multi-line-input-with-error"],e["dnn-single-line-input-with-error"],e["dnn-svg-icons"],e.react,e["react-dom"])}(this,function(e,t,n,i,r){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(8),d=i(s),u=n(9),p=i(u),f=n(5),c=i(f),h=n(6),b=i(h),v=n(7);n(4);var y=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.uniqueId="editableField-"+Date.now()*Math.random(),e}return a(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this.props;this.setState({editMode:!1,value:e.value,error:!1})}},{key:"toggleEditMode",value:function(){this.state.editMode||p["default"].findDOMNode(this.refs.editableInput).focus(),this.setState({editMode:!this.state.editMode})}},{key:"getEditableLabelClass",value:function(){var e=this.props,t=this.state,n=t.editMode?" in-edit":"",i="textArea"===e.inputType?" textArea":" singleLine";return"dnn-editable-field"+n+i}},{key:"onFocus",value:function(){window.dnn.stopEscapeFromClosingPB=!0,"function"==typeof this.props.onFocus&&this.props.onFocus()}},{key:"getInputFromType",value:function(){var e=this.props,t=this.state;return e.inputType&&"textArea"===e.inputType?d["default"].createElement(c["default"],{value:t.value,onKeyDown:this.onKeyDown.bind(this),onChange:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),ref:"editableInput",enabled:t.editMode,error:t.error,errorMessage:e.errorMessage}):d["default"].createElement(b["default"],{value:t.value,onKeyDown:this.onKeyDown.bind(this),onChange:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),ref:"editableInput",enabled:t.editMode,error:t.error,errorMessage:e.errorMessage})}},{key:"onKeyDown",value:function(e){var t=this,n=this.props,i=this.state;switch("function"==typeof this.props.onKeyDown&&this.props.onKeyDown(e),e.keyCode){case 13:e.preventDefault(),n.enableCallback?n.onEnter(i.value,function(){p["default"].findDOMNode(t.refs.editableInput).blur(),t.setState({editMode:!1,error:!1})},function(){t.setState({error:!0})}):(n.onEnter(i.value),p["default"].findDOMNode(this.refs.editableInput).blur(),this.setState({editMode:!1,error:!1}));break;case 27:e.preventDefault(),this.setState({value:n.value,editMode:!1,error:!1}),"function"==typeof this.props.onEscape&&this.props.onEscape(e),setTimeout(function(){p["default"].findDOMNode(t.refs.editableInput).blur()},250)}}},{key:"onBlur",value:function(){window.dnn.stopEscapeFromClosingPB=!1,"function"==typeof this.props.onBlur&&this.props.onBlur()}},{key:"onKeyUp",value:function(e){var t=e.target.value;this.setState({value:t}),"function"==typeof this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"getEditButton",value:function(){return d["default"].createElement("div",{className:"edit-button",onClick:this.toggleEditMode.bind(this),dangerouslySetInnerHTML:{__html:v.EditIcon}})}},{key:"getUrl",value:function(e){return 0!==e.indexOf("http://")&&0!==e.indexOf("https://")?"http://"+e:e}},{key:"getEditableValue",value:function(){var e=this.props,t=this.state;return e.isUrl?d["default"].createElement("span",{className:"editable-value"},d["default"].createElement("a",{href:this.getUrl(t.value),target:"_blank"},t.value)):d["default"].createElement("span",{className:"editable-value"},t.value)}},{key:"render",value:function(){var e=this.props,t=this.refs,n=this.getEditableLabelClass(),i=this.getInputFromType(),r=this.getEditableValue(),o=this.getEditButton();return d["default"].createElement("div",{className:n},d["default"].createElement("label",{className:"editable-label",htmlFor:t.input},e.label),e.editable&&o,r,d["default"].createElement("div",{className:"editable-input"},i,d["default"].createElement("span",{className:"help-text"},e.helpText||"Press ENTER when done, or ESC to cancel")))}}]),t}(s.Component);y.propTypes={label:s.PropTypes.string,value:s.PropTypes.string,inputType:s.PropTypes.string,onEnter:s.PropTypes.func,editable:s.PropTypes.bool,helpText:s.PropTypes.string,isUrl:s.PropTypes.bool.isRequired,onKeyUp:s.PropTypes.func,onKeyDown:s.PropTypes.func,onBlur:s.PropTypes.func,onFocus:s.PropTypes.func,onEscape:s.PropTypes.func,errorMessage:s.PropTypes.string,enableCallback:s.PropTypes.bool},y.defaultProps={editable:!0,isUrl:!1,enableCallback:!1},t["default"]=y},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-editable-field{display:block;width:100%;float:left;padding:15px 30px;margin-bottom:25px}.dnn-editable-field,.dnn-editable-field *{box-sizing:border-box}.dnn-editable-field label.editable-label{font-weight:700;text-transform:uppercase;float:left;margin-right:10px}.dnn-editable-field .edit-button svg{width:16px;height:16px;float:left;cursor:pointer}.dnn-editable-field span.editable-value{margin-top:10px;display:block;height:auto;float:left;opacity:1;width:100%}.dnn-editable-field div.editable-input{transition:.5s;height:0;display:block;float:left;width:100%;position:relative}.dnn-editable-field div.editable-input>div{width:100%;pointer-events:none}.dnn-editable-field div.editable-input input,.dnn-editable-field div.editable-input textarea{width:100%;opacity:0;border-radius:0;pointer-events:none}.dnn-editable-field div.editable-input textarea{height:100%;padding:8px 16px 20px}.dnn-editable-field div.editable-input .help-text{position:absolute;bottom:10px;right:5px;font-size:13px;font-weight:700;color:#1e88c3;opacity:0;transition:.2s;transition-delay:0s;height:0}.dnn-editable-field div.editable-input .dnn-ui-common-tooltip{display:none}.dnn-editable-field.in-edit{background-color:#fbfcfc}.dnn-editable-field.in-edit.textArea div.editable-input{height:150px}.dnn-editable-field.in-edit.singleLine div.editable-input{height:35px}.dnn-editable-field.in-edit div.editable-input>div{width:100%;pointer-events:all}.dnn-editable-field.in-edit div.editable-input input,.dnn-editable-field.in-edit div.editable-input textarea{opacity:1;pointer-events:all}.dnn-editable-field.in-edit div.editable-input .help-text{opacity:1;transition:0s;transition-delay:.2s;height:auto}.dnn-editable-field.in-edit span.editable-value{opacity:0;height:0}.dnn-editable-field.in-edit .edit-button svg{fill:#1e88c3}.dnn-editable-field.in-edit .dnn-ui-common-tooltip{display:block!important}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=c[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(d(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(d(i.parts[o],t));c[i.id]={id:i.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},i=0;i<e.length;i++){var r=e[i],o=r[0],a=r[1],l=r[2],s=r[3],d={css:a,media:l,sourceMap:s};n[o]?n[o].parts.push(d):t.push(n[o]={id:o,parts:[d]})}return t}function o(e,t){var n=v(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function d(e,t){var n,i,r;if(t.singleton){var o=g++;n=y||(y=l(t)),i=u.bind(null,n,o,!1),r=u.bind(null,n,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),i=f.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),i=p.bind(null,n),r=function(){a(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}function u(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var r=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var c={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,g=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return i(n,t),function(e){for(var o=[],a=0;a<n.length;a++){var l=n[a],s=c[l.id];s.refs--,o.push(s)}if(e){var d=r(e);i(d,t)}for(var a=0;a<o.length;a++){var s=o[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var i=n(1);"string"==typeof i&&(i=[[e.id,i,""]]);n(3)(i,{});i.locals&&(e.exports=i.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=i},function(e,t){e.exports=r}])});