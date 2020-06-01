$(function(){
    $('#login-show').click(function() {
        $('#login-modal').fadeIn();
    });

    $('.signup-show').click(function(){
        $('#signup-modal').fadeIn();
    });

    $('.close-modal').click(function(){
        $('#login-modal').fadeOut();
        $('#signup-modal').fadeOut();
    });

    $('.lesson-hover').hover(
        function(){
            $(this).find('.lesson-text').addClass('text-active');
        },
        function(){
            $(this).find('.lesson-text').removeClass('text-active');
        }
    );

    $('.faq-list-item').click(function(){
        var $answer = $(this).find('.answer');

        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });
});