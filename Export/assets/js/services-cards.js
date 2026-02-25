/**
 * Services cards – optional JS for your site
 * Use only if you want extra behavior (e.g. click tracking, smooth scroll).
 */

(function () {
  'use strict';

  const cards = document.querySelectorAll('.service-card');
  if (!cards.length) return;

  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      // If user clicked the "Learn More" link, let it navigate normally
      if (e.target.closest('.service-card__link')) return;
      // Optional: make whole card clickable – uncomment and set data-href on each card
      // var href = card.getAttribute('data-href');
      // if (href) window.location.href = href;
    });
  });
})();
