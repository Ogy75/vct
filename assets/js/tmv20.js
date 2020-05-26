$(window).on('load', function () {
    $('.lds-dual-ring-bg').fadeOut(800);
});

$(document).ready(function () {
    $('.time-module').on('click', function () {
        $(this).addClass('selected');
    });

    $('.time-module').click(function (event) {
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


    $('#days-spent').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#days-spent-data').fadeIn();
    });

    $('#days-previous').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#days-previous-data').fadeIn();
    });

    $('#days-free').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#days-free-data').fadeIn();
    });

    $('#days-earned').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#days-earned-data').fadeIn();
    });

    $('#days-assigned').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#days-assigned-data').fadeIn();
    });

    $('#vacation').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#vacation-data').fadeIn();
    });

    $('#days-sickleave').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#days-sickleave-data').fadeIn();
    });
    $('#total-work-hours').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#total-work-hours-data').fadeIn();
    });

    $('#work-from-home').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#work-from-home-data').fadeIn();
    });

    $('#daily-time-tracking').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#daily-time-tracking-data').fadeIn();
    });
    $('#timeline').click(function () {
        var timeModule = $('.time-module');
        var panelData = $('.panel-data');
        panelData.hide();
        $(this).parents('.left-items').find('#timeline-data').fadeIn();
    });

    $('.js_book').on('click', function () {
        $('.js_bookingMessage').removeClass('d-none');
    });

    $('.js_request').on('click', function () {
        $('.js_requestMessage').removeClass('d-none');
    });

    //team toggle menu
    $('.team-name').on('click', function () {
        $(this).parents('.vct-teams').find('.team-list').slideToggle(150);
        $(this).toggleClass('visible');
    });

    //on site toggle
    $('.toggle-onsite').on('click', function (ev) {
        var trigger = $(ev.target);
        trigger.parents('.parent').find('.on-site-row').toggleClass('d-none');
        trigger.toggleClass('fa-chevron-up');
    });

    //toggle clear btn to search
    $('.find-member').keyup(function () {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });
    //Clear&focus btn fn.
    $('.reset-input').on('click', function () {
        $('.find-member').val('').focus();
        $('.find-project').val('').focus();
        $('.reset-input').hide();
        $('.team-data').show();
        $('.no-results-message').hide();
        $('.vct-actions').show();
    });

    //toggle clear btn to search
    $('.find-member').keyup(function () {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });
    //Team member search
    $('.find-member').keyup(function () {
        var filter = $(this).val(),
            count = 0;
        $('.team-data').each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(80);
            } else {
                $(this).fadeIn(100);
                count++;
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
            $('.vct-actions').hide();
        } else {
            $('.no-results-message').show();
            $('.vct-actions').hide();
        }
    });




    //toggle clear btn to search
    $('.find-project').keyup(function () {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });

    //Clear&focus btn fn.
    $('.reset-input').on('click', function () {
        $('.find-project').val('').focus();
        $('.reset-input').hide();
        $('.vct-team').show();
        $('.no-results-message').hide();
    });

    //Project search
    $('.find-project').keyup(function () {
        var filter = $(this).val(),
            count = 0;
        $('.vct-team').each(function () {
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
    $('.find-employees').keyup(function () {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });

    //Clear&focus btn fn.
    $('.reset-input').on('click', function () {
        $('.find-employees').val('').focus();
        $('.reset-input').hide();
        $('.team-member').show();
        $('.no-results-message').hide();
    });

    //Project search
    $('.find-employees').keyup(function () {
        var filter = $(this).val(),
            count = 0;
        $('.team-member').each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut(100);
            } else {
                $(this).fadeIn(100);
                count++;
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
            $('.vct-actions').hide();
        } else {
            $('.no-results-message').show();
            $('.vct-actions').hide();
        }
    });

    //Pinning team list
    $('.pin').on('click', function () {
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
    $('#tab-projects').on('click', function () {
        if ($('.vct-project-tab').hasClass('d-none')) {
            $('.vct-project-tab').removeClass('d-none');
            $('.vct-employees-tab').addClass('d-none');
            $(this).toggleClass('selected');
            $('#tab-employees').toggleClass('selected');
        }
    });
    $('#tab-employees').on('click', function () {
        if ($('.vct-employees-tab').hasClass('d-none')) {
            $('.vct-project-tab').addClass('d-none');
            $('.vct-employees-tab').removeClass('d-none');
            $(this).toggleClass('selected');
            $('#tab-projects').toggleClass('selected');
            $('.add-member').hide();
        }
    });

    $('.js_launch').on('click', function () {
        $(this).html('cancel Campaign').addClass('btn-alert');
        $('.js_input').hide();
        $('.js_message').removeClass('d-none');
        $('.js_active').addClass('d-none');
        $('.js_inactive').removeClass('d-none');
    });

    //Scroll to top
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#go-top').fadeIn(100);
        } else {
            $('#go-top').fadeOut(100);
        }
    });
    $('#go-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    //PAYOUT Process
    $('.excel-doc').hide();
    $('.js_payout').on('click', function () {
        $('.small-loader').show();
        setTimeout(function () {
            $('.small-loader').hide();
            $('.excel-doc').show();
        }, 4000);
        $('.js_payout-data').removeClass('d-none');
        $('.js_payout-data').addClass('blink-warning');
        $(this).attr('disabled', true).html('Payout started');
    });

    //Checkbox sim
    // $('#responsibility').on('change', function() {
    //     if ($(this).is(':checked')) {
    //         $('.js_book').attr('disabled', false);
    //     } else {
    //         $('.js_book').attr('disabled', true);
    //     }
    // });

    $('.responsibility').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parents('.panel-container').find($('.js_book')).attr('disabled', false);
        } else {
            $(this).parents('.panel-container').find($('.js_book')).attr('disabled', true);
        }
    });


    //Booking validacija
    var selectedNo = $('.vacation-total').text();
    var valueChk = 0;
    var earnedDays = $('.earned-days').text();
    for (i = 0; i <= earnedDays; i++) {
        $('.earned-val').append('<option value=' + i + '>' + i + '</option>');
    }
    $(document).on('change', '.earned-val', function () {
        init();
    });
    $(document).on('change', '.vacation-val', function () {
        valueChk = parseInt($('.earned-val').val()) + parseInt($('.vacation-val').val());
    });

    function init() {
        earnedVal = $('.earned-val').val();
        valueChk = selectedNo - earnedVal;
        $('.vacation-val').find('option').remove().end();
        for (j = valueChk; j <= valueChk; j++) {
            $('.vacation-val').append('<option value=' + j + '>' + j + '</option>');
        }
    };
    init();

    //ADD HOME OFFICE DATE DEMO SCRIPT
    $('.js_addDate').on('click', function () {
        $('.js_addDateMessage').removeClass('d-none');
        //$(this).attr('disabled', true);
        $('.add-date').removeClass('d-none');
        var noS = $('.js_noDays').text();
        noS++;
        noS = $('.js_noDays').text(noS);

    });

    //TABLE ACCORDION
    $('.js_tableToggle').on('click', function () {
        $(this).parents('.table-toggle').find('.panel-table').fadeToggle(100);
        $(this).parents('.table-toggle').find('i').addClass('fa-chevron-down');
        $(this).parents('.table-toggle').find('i').toggleClass('fa-chevron-up');
        //$('.table-toggle').removeClass('highlight');
        //$(this).parents('.table-toggle').addClass('highlight');

    });

    //Switch DARK MODE
    var styleSwitch = 1;
    $('.js_darkMode').on('click', function () {
        styleSwitch *= -1;
        var colorMode = styleSwitch > 0 ? 'assets/css/v20Style.css' : 'assets/css/v20Style_d.css';
        $('#colorMode[rel=stylesheet]').attr('href', colorMode);
        $(this).toggleClass('fa-moon');
        $(this).toggleClass('fa-lightbulb');
    });

    $('.js_addEntry').on('click', function () {
        var timeValue = $('.js_entryInput').val();
        var addLog = $('.js_entry');
        $(addLog).append('<td>' + timeValue + '</td>');
        $('.js_entryInput').val('');
        $('.js_entryInput').focus();
    });

    $('.js_removeEntry').on('click', function () {
        $(this).parents('tr').remove();
    });

    //No teams
    var addTeam = $('.team-name-add');
    var existingTeam = $('.team-name');
    var teamList = $('.team-list');

    addTeam.on('click', function () {
        $(this).hide();
        existingTeam.removeClass('d-none');
        teamList.removeClass('d-none');
        $('.team-item').addClass('selected');
        $('.add-member').show();
        $('.js_toggleItems').removeClass('d-none');
    });

    //Add Competence Badge
    var competence = $('#competence');
    var addComp = $('.js_addComp');
    addComp.on('click', function () {
        if (competence.val() != '') {
            $(this).parents('.panel-container').find('.competence-list').append('<span class="badge badge-technology mr-2 mt-2">' + competence.val() + '<i class="close-badge fas fa-window-close"></i></span>');
            competence.val('').focus();
        }
    });

    //Remove competence Badge
    $('.close-badge').on('click', function () {
        $(this).parents('span').remove();
    });

    //Days off select
    $("#days-off").on("change", function () {
        $("option[value=" + this.value + "]", this)
            .attr("selected", true).siblings()
            .removeAttr("selected")
    });

    $("#days-off").change(function () {
        var id = $(this).find("option:selected").attr("id");

        switch (id) {
            case "other":
                $('.js_description').removeClass('d-none');
                break;
            default:
                $('.js_description').addClass('d-none');
        }
    });

    //TOGGLE ARCHIVED PROJECTS
    $('#archived').click(function () {
        if ($(this).prop('checked') == true) {
            $('.active-project').hide();
            $('.archived-project').show();
            $('#add-project').hide();
        }
        else {
            $('.active-project').show();
            $('.archived-project').hide();
            $('#add-project').show();
        }
    });

    //LOGO UPLOAD
    $(function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = imageLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });
    function imageLoaded(e) {
        $('#logo-img').attr('src', e.target.result);
        $(".upload-logo").text('change logo');
        $('#yourImage').attr('src', e.target.result);
    };

    //ADD ITEM
    $('.js_clone').on('click', function () {
        var item = $(this).parents().find('#js_item');
        $(item).clone().appendTo($('.js_items'));
    });

    //REMOVE ITEM
    $('.js_delete').on('click', function () {
        $(this).parents('#js_item').remove();
    });

    //ENABLE CONTRACT RATE ADJUSTMENT
    $('#rate-adjustment-possible').on('change', function(){
        if ($(this).prop('checked')){
            $(this).parents('.more-data').find('input').prop('disabled', false);
            $(this).val('possible');
            $(this).parents('.more-data').find('textarea').prop('disabled', false);
        }
        else{
            $(this).parents('.more-data').find('input[type=text]').prop('disabled', true);
            $(this).val('not possible');
            $(this).parents('.more-data').find('textarea').prop('disabled', true);
        }
    });

    //SETUP FEE POSSIBLE
    $('#ancilliary-setup-fee').on('change', function(){
        if ($(this).prop('checked')){
            $(this).parents('.more-data').find('textarea[name="ancilliary-setup-fee"]').prop('disabled', false);
            $(this).parents('.more-data').find('.mandatory').show();
            $(this).val('Setup fee exists');
        }
        else{
            $(this).parents('.more-data').find('textarea[name="ancilliary-setup-fee"]').prop('disabled', true);
            $(this).parents('.more-data').find('.mandatory').hide();
            $(this).val('No Setup fee');
        }
    });

    //SURCHARGE OPTION
    $('select[name="rate-surcharge-choice"]').change(function () {
        var value = $(this).find('option:selected').attr('value');

        switch (value) {
            case "not possible":
                $(this).parents('.more-data').find('input[type=text]').prop('disabled', true);
                break;
            default:
                $(this).parents('.more-data').find('input').prop('disabled', false);
                break;
        }
    });

    //ADD DISCOUNTS TO CONTRACT
    $('.js_addDiscount').on('click' ,function () {
        var value = $(this).parents('.discount-type-add').find('option:selected').attr('value');
        var overall = '<div class="col-12 mt-4 d-flex justify-content-between align-items-center discount js_overall"> <div class="d-flex align-items-center"> <input type="text" class="d-inline-block small-input" /> <p class="mx-1">% overall discount</p> </div> <button class="d-inline-block btn btn-secondary ml-2 js_removeDiscount">remove</button> </div>';
        var teamSize = '<div class="col-12 mt-4 d-flex justify-content-between align-items-center discount"> <div class="d-flex align-items-center"> <input type="text" class="d-inline-block small-input" /> <p class="mx-1">% discount on team count over</p> <input type="text" class="d-inline-block small-input" /> </div> <button class="d-inline-block btn btn-secondary ml-2 js_removeDiscount">remove</button> </div>';
        switch (value) {
            case "overall":
                $('.js_discounts').append(overall);
                break;
                case "team size":
                    $('.js_discounts').append(teamSize);
                break;
            default:
                break;
        }
        var discNo = $('.js_discounts').find('.discount').length;
        var single = 'discount';
        var multiple = single + "s";
        if (discNo == 1){
            $(this).parents('.contract-section').find('.badge-secondary').text(discNo + " " + single);
        }
        else {
            $(this).parents('.contract-section').find('.badge-secondary').text(discNo + " " + multiple);
        }
    });


    //ADD PERMISSION FIELD
    $('.js_addGranted').on('click', function(){
        $('#js_granted').clone().insertBefore('#js_addPermission');
    });
    //REMOVE PERMISSION FIELD
    $('.js_removeGranted').on('click',function(){
        $(this).parents('#js_granted').remove();
    });

     //Add Project Permission
     $('.js_addPermission').on('click', function () {
         if ($('#grant').val() != '') {
             $(this).parents().find('.granted-list').append('<span class="badge badge-technology mr-2 mt-2">' + $('#grant').val() + '<i class="close-badge fas fa-window-close"></i></span>');
             $('#grant').val('').focus();
         }
     });

     //Add Contract Permission
     $('.js_addContractPermission').on('click', function () {
        if ($('#grant').val() != '') {
            var personRole = $('#person-role');
            $(this).parents().find('.granted-list').append('<span class="badge badge-technology mr-2 mt-2">' + $('#grant').val() + " - " + personRole.val() + '<i class="close-badge fas fa-window-close"></i></span>');
            $('#grant').val('').focus();
        }
    });

    //CONTRACT SECTION TOGGLE
    $('.contract-section-header').on('click', function(){
        $(this).find('.form-title span').toggleClass('rotate');
        $(this).parents().next('.more-data').slideToggle(200);
    });

    //POPULATE SECTION TAGS
    $('.pronounced-data').on('change',function () {
        var content = $(this).val();
        $(this).parents('.contract-section').find('.badge-secondary').html(content);
    });


    $('#addContract').modal().show();
});