$(document).ready(function (){
    $('.scrollable').click(function (e) {
        $('body').scrollTo($(this).data('target'), 1000); // Scroll screen 500 pixels down
    });
});
