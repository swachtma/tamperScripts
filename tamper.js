// ==UserScript==
// @name         Salesforce CSM Quick Edits
// @description  Hide extra fields not needed for frequent CSM updates
// @copyright    N/A
// @license      N/A
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       You
// @match        https://cloudinary.lightning.force.com/lightning/o/Account/*
// @grant        none
// @updateURL    https://github.com/swachtma/tamperScripts/blob/master/tamper.js
// ==/UserScript==
// ==OpenUserJS==
// @author       swachtma
// ==/OpenUserJS==

(function() {
  "use strict";

  // Your code here...
  let newStyles = `
.forcePageBlockSectionEdit {display: none;}
.forcePageBlockSectionEdit:nth-of-type(6) {display: block;}
.forcePageBlockSectionEdit .slds-form {display: table; width: 100%}
.tooltip {display: none !important;}
.tooltip-trigger {display: none !important;}
.forcePageBlockSectionEdit .slds-form .slds-grid:nth-child(7) {display: table-header-group;}
.forcePageBlockSectionEdit .slds-grid {display: block;}

`;
  var style = document.createElement("style");
  style.type = "text/css";
  if (style.styleSheet) {
    style.styleSheet.cssText = newStyles;
  } else {
    style.appendChild(document.createTextNode(newStyles));
  }
  document.getElementsByTagName("head")[0].appendChild(style);
})();
