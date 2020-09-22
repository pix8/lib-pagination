(function () {
  'use strict';

  !function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&i.firstChild?i.insertBefore(o,i.firstChild):i.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t));}}(".ui__accordion .ui__tab {\n  position: relative; }\n  .ui__accordion .ui__tab .ui__toggle {\n    display: block;\n    cursor: pointer; }\n\n.ui__accordion .ui__pane {\n  position: relative;\n  overflow: hidden; }\n\n.ui__accordion .ui__tab:not([aria-expanded=true]):not([aria-selected=true]):not(.state__active):not(.state__transition) + .ui__pane,\n.ui__accordion .ui__tab:not([aria-expanded=true]):not([aria-selected=true]):not(.state__active):not(.state__transition) + [aria-hidden=true] {\n  height: 0;\n  display: none; }\n");

}());
