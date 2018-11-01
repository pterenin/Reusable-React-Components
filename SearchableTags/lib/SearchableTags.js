!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("dnn-tooltip")):"function"==typeof define&&define.amd?define(["react","dnn-tooltip"],t):"object"==typeof exports?exports.SearchableTags=t(require("react"),require("dnn-tooltip")):e.SearchableTags=t(e.react,e["dnn-tooltip"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),l=r(u),c=n(7),p=r(c),d=n(2),f=r(d);n(6);var h={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,UP:38,DOWN:40},g=function(e){function t(e){s(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=300,n.setTimeout=null,n.onKeyDown=n.onKeyDown.bind(n),n.state={tags:n.props.tags||[],newTagText:"",isInputVisible:!0,tagInputActive:!1,selectedIndex:0,loading:!1,inputWidth:13,searchResults:[]},n}return o(t,e),a(t,[{key:"componentDidMount",value:function(){document.addEventListener("keypress",this.onKeyDown,!1),this.resizeInputField()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.onKeyDown,!1)}},{key:"hasClass",value:function(e,t){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}},{key:"getServiceFramework",value:function(){var e=this.props.utils.utilities.sf;return e.controller="ProfileService",e.moduleRoot="InternalServices",e}},{key:"getSearchResults",value:function(){var e=this;this.resizeInputField();var t=this.state.newTagText&&"string"==typeof this.state.newTagText?this.state.newTagText:"";return t?(this.setState({loading:!0}),clearTimeout(this.setTimeout),void(this.setTimeout=setTimeout(function(){var n=e.getServiceFramework();return n.get("Search",{q:t},e.setSearchResults.bind(e),e.handleError.bind(e))},this.timeout))):this.setSearchResults([])}},{key:"setSearchResults",value:function(e){this.setState({searchResults:e,selectedIndex:0,loading:!1})}},{key:"handleError",value:function(e){this.setState({loading:!1}),console.log("ERROR:",e)}},{key:"resizeInputField",value:function(){var e=this.refs.tagsField.getBoundingClientRect().width-30;this.state.tags.length&&(e=this.state.newTagText.length?7*this.state.newTagText.length+6:13),this.setState({inputWidth:e,isInputVisible:!0})}},{key:"addTag",value:function(e){var t=this;if(this.state.searchResults.length&&!this.props.isDisabled){var n=this.state.selectedIndex||0,r=e||this.state.searchResults[n];if(r){this.setState({isInputVisible:!1});var s=this.state.tags;s.push(r),this.updateTags(s),setTimeout(function(){t.refs.inputField.focus()},0)}}}},{key:"updateSelectedIndex",value:function(e){if(!this.props.isDisabled){var t=this.state.selectedIndex+e;t<0&&(t=0),t>=this.state.searchResults.length&&(t=this.state.searchResults.length-1),this.setState({selectedIndex:t})}}},{key:"onKeyDown",value:function(e){switch(e.keyCode){case h.ENTER:return this.addTag();case h.TAB:return e.preventDefault(),this.addTag();case h.BACKSPACE:return this.removeLastTag();case h.UP:return this.updateSelectedIndex(-1);case h.DOWN:return this.updateSelectedIndex(1)}}},{key:"onTagFocus",value:function(){this.setState({tagInputActive:!0})}},{key:"onTagBlur",value:function(){this.setState({tagInputActive:!1})}},{key:"removeLastTag",value:function(){if(!this.state.newTagText&&!this.props.isDisabled){var e=this.state.tags;e.pop(),this.updateTags(e)}}},{key:"onChange",value:function(e){this.props.isDisabled||this.setState({newTagText:e.target.value},this.getSearchResults.bind(this))}},{key:"selectItem",value:function(e){this.setState({selectedIndex:e})}},{key:"removeTagByName",value:function(e){if(!this.props.isDisabled){var t=this.state.tags;t=t.filter(function(t){return t.id!==e}),this.updateTags(t)}}},{key:"updateTags",value:function(e){var t=this;this.setState({tags:e,newTagText:"",searchResults:[]},function(){t.resizeInputField(),t.props.onUpdateTags(e)})}},{key:"getResultsItems",value:function(){var e=this;if(this.state.searchResults.length)return this.state.searchResults.map(function(t,n){var r=n===e.state.selectedIndex?"selected":"";return l["default"].createElement("div",{key:t.id,className:"result-item "+r,onClick:e.addTag.bind(e,t),onMouseEnter:e.selectItem.bind(e,n)},t.name)});if(!this.state.searchResults.length&&this.state.newTagText){var t=this.state.loading?"Searching...":"No Results";return l["default"].createElement("div",{className:"result-item"},t)}return!1}},{key:"focusInput",value:function(){this.refs.inputField.focus()}},{key:"render",value:function(){var e=this,t=this.state.tags.map(function(t,n){return l["default"].createElement(f["default"],{tag:t.name,key:t.id+n,onRemove:e.removeTagByName.bind(e,t.id)})}),n={width:this.state.inputWidth,display:this.state.isInputVisible===!1?"none":"block"},r=this.getResultsItems(),s=this.props.isDisabled||this.state.tags.length?"":"Begin typing to search tags",i="tags-field"+(this.state.tagInputActive?" active ":"")+(this.props.isDisabled?" disabled":"")+(this.props.error?" error":"");return l["default"].createElement("div",{className:i,onClick:this.focusInput.bind(this),ref:"tagsField"},l["default"].createElement("div",{type:"text",className:"dark-form-control"},t,l["default"].createElement("input",{disabled:this.props.isDisabled,ref:"inputField",type:"text",placeholder:s,style:n,onKeyDown:this.onKeyDown.bind(this),value:this.state.newTagText,onChange:this.onChange.bind(this),onFocus:this.onTagFocus.bind(this),onBlur:this.onTagBlur.bind(this),"aria-label":"Tag"})),r&&l["default"].createElement("div",{className:"tag-search-results"},r),this.props.error&&this.props.errorMessage&&l["default"].createElement(p["default"],{messages:[this.props.errorMessage],type:"error",tooltipPlace:"top",rendered:this.props.error}))}}]),t}(u.Component);t["default"]=g,g.propTypes={utils:u.PropTypes.object.isRequired,tags:u.PropTypes.array.isRequired,onUpdateTags:u.PropTypes.func.isRequired,error:u.PropTypes.bool,errorMessage:u.PropTypes.string,isDisabled:u.PropTypes.bool}},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),l=r(u),c=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),a(t,[{key:"render",value:function(){var e=this.props.tag.trim();return!!e&&l["default"].createElement("div",{className:"tag glyph"},this.props.tag,l["default"].createElement("span",{className:"close",onClick:this.props.onRemove},"×"))}}]),t}(u.Component);t["default"]=c,c.propTypes={tag:u.PropTypes.string,onRemove:u.PropTypes.func}},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.tags-field{background:#fff;float:left;width:300px;border:1px solid #959695;box-sizing:border-box;position:relative}.tags-field.error{border-bottom:2px solid red}.tags-field.disabled{background:#e5e7e6;border-color:#e5e7e6}.tags-field.disabled,.tags-field.disabled *{pointer-events:none}.tags-field.disabled .tag{background:#c8c8c8}.tags-field.active{border:1px solid #1e88c3}.tags-field .dark-form-control{padding:0!important;height:auto;float:left;margin:0!important}.tags-field input{padding:0;padding:9px 12px;background:transparent;border:none;color:#46292b;float:left;outline:none!important}.tags-field .tag{float:left;position:relative;padding:3px 18px 3px 7px!important;margin-top:7px;margin-left:9px;background:#1e88c3;color:#fff;font-size:11px}.tags-field .tag .close{position:absolute;padding:0 5px;font-size:16px;line-height:15px;cursor:pointer}.tags-field .tag-search-results{position:absolute;width:100%;border:1px solid #959695;top:100%;margin-top:1px;border-top:none;left:-1px;padding:6px 0;background:#fff}.tags-field .tag-search-results .result-item{padding:6px 10px;cursor:pointer}.tags-field .tag-search-results .result-item.selected{background:#eff0f0;color:#1e88c3}.tags-field .dnn-ui-common-tooltip{position:absolute;right:0}.tags-field .dnn-ui-common-tooltip .icon{float:right;margin-top:6px;margin-right:4px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=f[r.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(l(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(l(r.parts[i],t));f[r.id]={id:r.id,refs:1,parts:o}}}}function s(e){for(var t=[],n={},r=0;r<e.length;r++){var s=e[r],i=s[0],o=s[1],a=s[2],u=s[3],l={css:o,media:a,sourceMap:u};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function i(e,t){var n=v(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function l(e,t){var n,r,s;if(t.singleton){var i=m++;n=b||(b=a(t)),r=c.bind(null,n,i,!1),s=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=d.bind(null,n),s=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=p.bind(null,n),s=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}function c(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(s),i&&URL.revokeObjectURL(i)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return r(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],u=f[a.id];u.refs--,i.push(u)}if(e){var l=s(e);r(l,t)}for(var o=0;o<i.length;o++){var u=i[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,n){e.exports=t}])});