// ==UserScript==
// @namespace     https://openuserjs.org/users/swachtma
// @name          CSM Salesforce Quick Edits
// @description   Hide non-essential fields for frequent CSM updates
// @copyright     2019, swachtma (https://openuserjs.org/users/swachtma)
// @license       MIT
// @version       1.0.4
// @include       https://cloudinary.lightning.force.com/*
// @match         https://cloudinary.lightning.force.com/*
// @grant         none
// ==/UserScript==

// ==OpenUserJS==
// @author swachtma
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
.mdp .forcePageBlockSectionEdit {display: block !important;}
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
