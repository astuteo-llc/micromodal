var version="0.3.2",classCallCheck=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)},MicroModal=function(){var e=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],o=function(){function o(e){var t=e.targetModal,n=e.triggers,i=void 0===n?[]:n,a=e.onShow,r=void 0===a?function(){}:a,s=e.onClose,l=void 0===s?function(){}:s,c=e.openTrigger,d=void 0===c?"data-micromodal-trigger":c,u=e.closeTrigger,h=void 0===u?"data-micromodal-close":u,f=e.disableScroll,v=void 0!==f&&f,g=e.disableFocus,m=void 0!==g&&g,b=e.awaitCloseAnimation,y=void 0!==b&&b,k=e.debugMode,w=void 0!==k&&k;classCallCheck(this,o),this.modal=document.getElementById(t),this.config={debugMode:w,disableScroll:v,openTrigger:d,closeTrigger:h,onShow:r,onClose:l,awaitCloseAnimation:y,disableFocus:m},i.length>0&&this.registerTriggers.apply(this,toConsumableArray(i)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return createClass(o,[{key:"registerTriggers",value:function(){for(var e=this,o=arguments.length,t=Array(o),n=0;n<o;n++)t[n]=arguments[n];t.forEach(function(o){o.addEventListener("click",function(o){return e.showModal(o)})})}},{key:"showModal",value:function(e){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal,e),t=this}},{key:"closeModal",value:function(e){var o=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal,e),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function e(){o.classList.remove("is-open"),o.removeEventListener("animationend",e,!1)},!1):o.classList.remove("is-open")}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var o=document.querySelector("body");switch(e){case"enable":Object.assign(o.style,{overflow:"initial",height:"initial"});break;case"disable":Object.assign(o.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(e),e.preventDefault())}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var o=this.modal.querySelectorAll(e);return Object.keys(o).map(function(e){return o[e]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes();e.length&&e[0].focus()}}},{key:"maintainFocus",value:function(e){var o=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var t=o.indexOf(document.activeElement);e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||t!==o.length-1||(o[0].focus(),e.preventDefault())}else o[0].focus()}}]),o}(),t=null,n=function(e,o){var t=[];return e.forEach(function(e){var n=e.attributes[o].value;void 0===t[n]&&(t[n]=[]),t[n].push(e)}),t},i=function(e){if(!document.getElementById(e))return console.warn("MicroModal v"+version+": ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},a=function(e){if(e.length<=0)return console.warn("MicroModal v"+version+": ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1},r=function(e,o){if(a(e),!o)return!0;for(var t in o)i(t);return!0};return{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),i=t.element?[t.element]:[].concat(toConsumableArray(document.querySelectorAll("["+t.openTrigger+"]"))),a=n(i,t.openTrigger);if(!0!==t.debugMode||!1!==r(i,a))for(var s in a){var l=a[s];t.targetModal=s,t.triggers=[].concat(toConsumableArray(l)),new o(t)}},show:function(e,t){var n=t||{};n.targetModal=e,!0===n.debugMode&&!1===i(e)||new o(n).showModal()},close:function(){t&&t.closeModal()}}}();export default MicroModal;
