(function () {
      function hasClass(el, className) {
        return el && (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
      }
      function addClass(el, className) {
        if (!el || hasClass(el, className)) return;
        el.className = (el.className ? el.className + ' ' : '') + className;
      }
      function removeClass(el, className) {
        if (!el) return;
        el.className = (' ' + el.className + ' ').replace(' ' + className + ' ', ' ').replace(/^\s+|\s+$/g, '');
      }
      function closestByClass(el, className) {
        while (el && el.nodeType === 1) {
          if (hasClass(el, className)) return el;
          el = el.parentNode;
        }
        return null;
      }
      function isTapMode() {
        var fineHover = false;
        if (window.matchMedia) {
          try {
            fineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
          } catch (e) {
            fineHover = false;
          }
        }
        return window.innerWidth <= 900 || !fineHover;
      }
      function getCards() {
        return document.querySelectorAll ? document.querySelectorAll('.founder-card') : [];
      }
      function closeCards(exceptCard) {
        var cards = getCards();
        for (var i = 0; i < cards.length; i++) {
          if (cards[i] === exceptCard) continue;
          removeClass(cards[i], 'is-flipped');
          cards[i].setAttribute('aria-pressed', 'false');
        }
      }
      function toggleCard(card) {
        if (!card || (card.querySelector && card.querySelector('.founder-photo--missing'))) return;
        var shouldOpen = !hasClass(card, 'is-flipped');
        closeCards(card);
        if (shouldOpen) addClass(card, 'is-flipped');
        else removeClass(card, 'is-flipped');
        card.setAttribute('aria-pressed', shouldOpen ? 'true' : 'false');
      }
      function bindFounderCards() {
        var cards = getCards();
        for (var i = 0; i < cards.length; i++) {
          cards[i].onclick = function (event) {
            if (!isTapMode()) return;
            toggleCard(this);
            if (event && event.stopPropagation) event.stopPropagation();
          };
          cards[i].onkeydown = function (event) {
            event = event || window.event;
            var key = event.key || event.keyCode;
            if (key !== 'Enter' && key !== ' ' && key !== 13 && key !== 32) return;
            if (event.preventDefault) event.preventDefault();
            toggleCard(this);
          };
        }
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindFounderCards);
      } else {
        bindFounderCards();
      }
      document.addEventListener('click', function (event) {
        if (!isTapMode()) return;
        if (closestByClass(event.target || event.srcElement, 'founder-card')) return;
        closeCards(null);
      });
    })();
