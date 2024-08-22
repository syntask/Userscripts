// ==UserScript==
// @name         Declutter Google
// @version      1.0.0
// @description  Removes unnecessary/annoying elements of the Google homepage like the "I'm Feeling Lucky" button, promotional messages, etc.
// @author       Syntask
// @include      https://www.google.com/
// @include      https://www.google.com/*
// @exclude      https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Hide the buttons below the search bar
    var googleSearchElements = document.querySelectorAll('[aria-label="Google Search"], [aria-label="I\'m Feeling Lucky"]');
    googleSearchElements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Hide the footer
    var contentInfoElements = document.querySelectorAll('[role="contentinfo"]');
    contentInfoElements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Hide promotional messages
    var nofollowElements = document.querySelectorAll('body div div div div a[rel="nofollow"]');
    nofollowElements.forEach(function(element) {
        element.style.display = 'none';
    });

})();
