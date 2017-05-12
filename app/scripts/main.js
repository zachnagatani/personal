$(function() {
    'use strict';

    $('.section').each(function() {
        $(this).css('min-height', window.innerHeight);
    });

    (function() {
        // This closure's element is the portfolio section
        const element = $('#portfolio'),
              clickHandler = event => {
                  // The vanilla JS event target
                  let target = event.target,
                  // The jQuery event target
                      $target = $(target);
                  const BASECLASS = 'section--portfolio__item',
                        SELECTEDCLASS = 'section--portfolio__item--selected',
                        MARGINOFFSET = 20;

                  // Check if the target we clicked is expanded. If so, shrink it
                  // If not, shrink any other expanded item and then expand it.
                  if (target.className.includes(SELECTEDCLASS)) {
                      $target.removeClass(SELECTEDCLASS).height(200);
                      // Scrolls back to portfolio section
                      setTimeout(function() {
                        $('html, body').animate({scrollTop: $('#portfolio').offset().top}, 500);
                      }, 500);
                  } else {
                      $('.' + SELECTEDCLASS).removeClass(SELECTEDCLASS).height(200);
                      $target.addClass(SELECTEDCLASS).height(window.innerHeight - MARGINOFFSET);
                      // Centers portfolio item on screen
                      setTimeout(function() {
                        $('html, body').animate({scrollTop: $target.offset().top - 10}, 500);
                      }, 200);
                  }
              };

        // Set the height of the portfolio on load
        element.css('min-height', window.innerHeight);

        element.on('click', clickHandler);
    })();

    (function() {
        const element = $('.container--sidebar');
        element.scrollspy({ activeClass: 'sidebar__anchor--active', animate: true, offset: 1 });
    })();
});