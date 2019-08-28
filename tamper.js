// ==UserScript==
// @namespace     https://openuserjs.org/users/swachtma
// @name          Getting Started with a User Script
// @description   Showing the current basic and recommended format for a User script.
// @copyright     2019, swachtma (https://openuserjs.org/users/swachtma)
// @license       OSI-SPDX-Short-Identifier
// @version       0.0.0
// @include       https://www.example.com/*
// @grant none
// @match         https://cloudinary.lightning.force.com/lightning/o/Account/*
// ==/UserScript==

// ==OpenUserJS==
// @author swachtma
// ==/OpenUserJS==

/**
 *
 * Please begin typing or paste your User script now.
 *
 */

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
