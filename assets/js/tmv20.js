$(document).ready(function() {
    $('.time-module').on('click', function() {
        $(this).addClass('selected');
        //$('.time-module').hasClass('selected').not($(this)).removeClass('selected');  
    });

    // $('.time-module').click(function() {
    //     $(this).addClass('selected');
    //     $(this).parents('.row').siblings().removeClass('selected');
    //   });

    $('.time-module').click(function(event) {
        var timeModule = $('.time-module');
        var moduleStatus = $('.module-status');
        var moduleIcon = $('.module-icon');
        timeModule.removeClass('selected');
        timeModule.find(moduleStatus).removeClass('active');
        timeModule.find(moduleIcon).removeClass('selected');
        $(this).addClass('selected');
        $(this).find(moduleStatus).addClass('active');
        $(this).find(moduleIcon).addClass('selected');
        event.preventDefault();
    });


    $('#days-spent').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#days-spent-data').fadeIn();
    });

    $('#days-previous').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#days-previous-data').fadeIn();
    });

    $('#days-free').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#days-free-data').fadeIn();
    });

    $('#days-earned').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#days-earned-data').fadeIn();
    });

    $('#days-assigned').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#days-assigned-data').fadeIn();
    });

    $('#days-available').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#days-available-data').fadeIn();
    });

    $('#days-sickleave').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#days-sickleave-data').fadeIn();
    });
    $('#total-work-hours').click(function() {
        var timeModule = $('.time-module');
        var panelContainer = $('.panel-container');
        panelContainer.hide();
        $(this).parents('.left-items').find('#total-work-hours-data').fadeIn();
    });

    $('.js_book').on('click', function() {
        $('.js_bookingMessage').removeClass('d-none');
    });

    //team toggle menu
    $('.team-name').on('click', function() {
        $(this).parents('.vct-teams').find('.team-list').toggle();
        $(this).toggleClass('visible');
    });

    //on site toggle
    $('.toggle-onsite').on('click', function(ev) {
        var trigger = $(ev.target);
        trigger.parents('.parent').find('.on-site-row').toggleClass('d-none');
        trigger.toggleClass('fa-chevron-up');
    });

    //toggle clear btn to search
    $('.find-member').keyup(function() {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });
    //Clear&focus btn fn.
    $('.reset-input').on('click', function() {
        $('.find-member').val('').focus();
        $('.find-project').val('').focus();
        $('.reset-input').hide();
        $('.team-data').show();
        $('.no-results-message').hide();
        $('.vct-actions').show();
    });

    //toggle clear btn to search
    $('.find-member').keyup(function() {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });
    //Team member search
    $('.find-member').keyup(function() {
        var filter = $(this).val(),
            count = 0;
        $('.team-data').each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(100);
            } else {
                $(this).fadeIn(100);
                count++;
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
            $('.vct-actions').show();
        } else {
            $('.no-results-message').show();
            $('.vct-actions').hide();
        }
    });




    //toggle clear btn to search
    $('.find-project').keyup(function() {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });

    //Clear&focus btn fn.
    $('.reset-input').on('click', function() {
        $('.find-project').val('').focus();
        $('.reset-input').hide();
        $('.vct-team').show();
        $('.no-results-message').hide();
    });

    //Project search
    $('.find-project').keyup(function() {
        var filter = $(this).val(),
            count = 0;
        $('.vct-team').each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(100);
            } else {
                $(this).fadeIn(100);
                count++;
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
        } else {
            $('.no-results-message').show();
        }
    });



    //toggle clear btn to search
    $('.find-employees').keyup(function() {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });

    //Clear&focus btn fn.
    $('.reset-input').on('click', function() {
        $('.find-employees').val('').focus();
        $('.reset-input').hide();
        $('.team-member').show();
        $('.no-results-message').hide();
    });

    //Project search
    $('.find-employees').keyup(function() {
        var filter = $(this).val(),
            count = 0;
        $('.team-member').each(function() {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(100);
            } else {
                $(this).fadeIn(100);
                count++;
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
        } else {
            $('.no-results-message').show();
        }
    });

    //Pinning team list
    $('.pin').on('click', function() {
        $(this).parents('.vct-teams').toggleClass('pinned');
        $(this).toggleClass('pin-pinned');
    });

    //CHANGE BOOKING IMAGE BY SEASON
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var total = month;
    var container = $('.booking-wrapper');
    if (total >= 6 && total <= 8) {
        container.css('background-image', 'url("assets/images/summer.jpg")');
    } else if (total >= 9 && total <= 11) {
        container.css('background-image', 'url("assets/images/autumn.jpg")');
    } else if (total == 12 || total == 1 || total == 2) {
        container.css('background-image', 'url("assets/images/winter.jpg")');
    } else if (total >= 2 && total <= 6) {
        container.css('background-image', 'url("assets/images/spring.jpg")');
    } else {
        container.css('background-image', 'url("assets/images/summer.jpg")');
    }

    //PROJECT TABS
    $('#tab-projects').on('click', function() {
        if ($('.vct-project-tab').hasClass('d-none')) {
            $('.vct-project-tab').removeClass('d-none');
            $('.vct-employees-tab').addClass('d-none');
            $(this).toggleClass('selected');
            $('#tab-employees').toggleClass('selected');
        }
    });
    $('#tab-employees').on('click', function() {
        if ($('.vct-employees-tab').hasClass('d-none')) {
            $('.vct-project-tab').addClass('d-none');
            $('.vct-employees-tab').removeClass('d-none');
            $(this).toggleClass('selected');
            $('#tab-projects').toggleClass('selected');
        }
    });

    $('.js_launch').on('click', function() {
        $(this).html('cancel Campaign').addClass('btn-alert');
        $('.js_input').hide();
        $('.js_message').removeClass('d-none');
        $('.js_active').addClass('d-none');
        $('.js_inactive').removeClass('d-none');
    });

    //Scroll to top
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#go-top').fadeIn(100);
        } else {
            $('#go-top').fadeOut(100);
        }
    });
    $('#go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    //PAYOUT Process
    $('.js_payout').on('click', function() {
        $('.js_payout-data').removeClass('d-none');
        $(this).attr('disabled', true).html('Payout started');
    });

});