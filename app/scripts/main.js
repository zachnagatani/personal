$(function() {
    'use strict';

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
                  } else {
                      $('.' + SELECTEDCLASS).removeClass(SELECTEDCLASS).height(200);
                      $target.addClass(SELECTEDCLASS).height(window.innerHeight - MARGINOFFSET);
                      $target.scrollView();
                  }
              };

        // Set the height of the portfolio on load
        element.height(window.innerHeight);

        element.on('click', clickHandler);
    })();
});