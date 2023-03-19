/*Code Toggle*/
function changeText(id) {
    if (id.innerHTML === 'View Code +') id.innerHTML = 'Hide Code –';
    else {
        id.innerHTML = 'View Code +';
    }
}

(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

})(jQuery);
