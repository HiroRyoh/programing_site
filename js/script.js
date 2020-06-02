$(function(){

    function toggleChangeBtn() {
        var slideIndex = $('.slide').index($('.active'));
        $('.change-btn').show();
        if (slideIndex === 0) {
            $('.prev-btn').hide();
        } else if (slideIndex === $('.slide').length -1) {
            $('.next-btn').hide();
        }
    }

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

    // $('#hide-btn').click(function() {
    //     $('.slide').eq(1).fadeOut();
    // });

    $('.index-btn').click(function(){
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide').eq(clickedIndex).addClass('active');

        toggleChangeBtn();
    });

    $('.change-btn').click(function() {
        // 現在activeになっている要素
        var $displaySlide = $('.active');

        $displaySlide.removeClass('active');

        if ($(this).hasClass('next-btn')) {
            $displaySlide.next().addClass('active');
        } else {
            $displaySlide.prev().addClass('active');
        }

        toggleChangeBtn();
    });

    $('#form').submit(function() {
        var selectValue = $('#select-form').val();
        var textValue = $('#text-form').val();

        if (textValue == '') {
            $('#error-message').text('理由を記入してください')
        } else {
            $('#error-message').text('');
        }

        $('#output-select').text(selectValue);
        $('#output-text').text(textValue);

        return false;
    });

    $('.option-btn').click(function() {
        var optionText = $(this).text();
        var clickedOption = $(this).attr('data-option');

        $('#text-form').val(optionText + 'が好きな理由は、');
        $('#select-form').val(clickedOption);
    });

    $('.social-icon').hover(
        function(){
            $(this).animate({
                'font-size': '24px'
            }, 200);
        },
        function(){
            $(this).animate({
                'font-size': '20px'
            }, 200);
        }
    );

    $('#top-btn').click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 500);
    });

    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;

        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });
});