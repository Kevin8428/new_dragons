var main = function() {
    $('.upload').click(function() {
        $('.upload-box').fadeIn(600).show();
    });

    $('.close-box').click(function() {
        $('.upload-box').fadeOut(600).hide();
    });


    $('.upload-box').hide();

}

$(document).ready(main);
