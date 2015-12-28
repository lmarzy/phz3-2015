(function() {

  'use strict';

  var statusLink  = document.getElementById('js-show-status'),
      statusClose = document.getElementById('js-status-close'),
      siteHeader  = document.getElementById('js-site-header');

  statusLink.addEventListener('click', function(e) {
    e.preventDefault();
    siteHeader.classList.add("c-site-header__is-status-revealed");
  });

  statusClose.addEventListener('click', function() {
    siteHeader.classList.remove("c-site-header__is-status-revealed");
  });

}());
