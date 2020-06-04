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
            $('.invoice-preview').removeClass('copy');
            $('#export-invoice-btn').show();
            $('#export-copy-btn').hide();
        }
    });
    $('#tab-employees').on('click', function () {
        if ($('.vct-employees-tab').hasClass('d-none')) {
            $('.vct-project-tab').addClass('d-none');
            $('.vct-employees-tab').removeClass('d-none');
            $(this).toggleClass('selected');
            $('#tab-projects').toggleClass('selected');
            $('.add-member').hide();
            $('.invoice-preview').addClass('copy');
            $('#export-invoice-btn').hide();
            $('#export-copy-btn').show();
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

    //ADD/REMOVE ITEM
    $('.js_clone').on('click', function () {
        var item = $(this).parents().find('#js_item');
        $(item).clone().appendTo($('.js_items'));
        $('.js_delete').on('click', function () {
            $(this).parents('#js_item').remove();
        });
    });

    //ADD/REMOVE RATE ITEM
    $('.js_clone-1').on('click', function () {
        var form = '<div class="col-12 js_item" id="js_item-1"> <div class="border-bottom pb-3"> <div class="row"> <div class="col-12 col-sm-6 order-2 order-sm-1"> <label for="contract-position">commercial position *</label> <input type="text" name="contract-position"> </div><div class="col-12 col-sm-6 d-flex justify-content-between align-items-end order-1 order-sm-3"> <div class="w-100 mr-3"> <label for="my-company-name">internal position *</label> <div class="select-height-fix d-flex align-items-center"> <select name="my-company-name" class="w-100"> <option selected>Select Internal position</option> <option>Team Lead</option> <option>Senior N1</option> <option>Senior N2</option> <option>Professional N1</option> <option>Professional N2</option> <option>Engineer N1</option> <option>Engineer N2</option> </select> </div></div><span class="btn btn-symbol btn-secondary js_delete-1">&times;</span> </div><div class="col-12 col-sm-6 order-3"> <div class="row"> <div class="col-6"> <label for="rate">rate (CHF)</label> <input type="text" name="rate"/> </div><div class="col-6"> <label for="rate-on-site">rate on-site (CHF)</label> <input type="text" name="rate-on-site"/> </div></div></div><div class="col-12 col-sm-6 order-4"> <label for="rate-valid-from">rate valid from</label> <input type="text" name="rate-valid-from"/> </div></div></div></div>';
        var container = $('.js_items-1');
        $(form).appendTo($(container));
        $('.js_delete-1').on('click', function () {
            $(this).parents('.js_item').remove();
        });
    });

    //ENABLE CONTRACT RATE ADJUSTMENT
    $('#rate-adjustment-possible').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).parents('.more-data').find('input').prop('disabled', false);
            $(this).val('possible');
            $(this).parents('.more-data').find('textarea').prop('disabled', false);
        }
        else {
            $(this).parents('.more-data').find('input[type=text]').prop('disabled', true);
            $(this).val('not possible');
            $(this).parents('.more-data').find('textarea').prop('disabled', true);
        }
    });

    //SETUP FEE POSSIBLE
    $('#ancilliary-setup-fee').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).parents('.more-data').find('textarea[name="ancilliary-setup-fee"]').prop('disabled', false);
            $(this).parents('.more-data').find('.mandatory').show();
            $(this).val('Setup fee exists');
        }
        else {
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

    //CONTRACT STATUS
    $('select[name="contract-status"]').change(function () {
        var value = $(this).find('option:selected').attr('value');
        var date = $(this).parents('.more-data').find('input[name="contract-status-from"]');
        switch (value) {
            case "active":
                $(this).parents('.more-data').find('.inactive-from').hide();
                $(this).parents('.contract-section').find('.badge-secondary').text('active');
                break;
            default:
                $(this).parents('.more-data').find('.inactive-from').show();
                $(this).parents('.contract-section').find('.badge-secondary').text('inactive from' + " " + date.val());
                break;
        }
    });

    //ADD/REMOVE DISCOUNTS TO CONTRACT
    $('.js_addDiscount').on('click', function () {
        var value = $(this).parents('.discount-type-add').find('option:selected').attr('value');
        var overall = '<div class="col-12 mt-4 d-flex justify-content-between align-items-center discount js_overall"> <div class="d-flex align-items-center"> <input type="text" class="d-inline-block small-input" /> <p class="mx-1">% overall discount</p> </div> <button class="d-inline-block btn btn-symbol btn-secondary ml-2 js_removeDiscount">&times;</button> </div>';
        var teamSize = '<div class="col-12 mt-4 d-flex justify-content-between align-items-center discount"> <div class="d-flex align-items-center"> <input type="text" class="d-inline-block small-input" /> <p class="mx-1">% discount on team count over</p> <input type="text" class="d-inline-block small-input" /> </div> <button class="d-inline-block btn btn-symbol btn-secondary ml-2 js_removeDiscount">&times;</button> </div>';
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
        if (discNo == 1) {
            $(this).parents('.contract-section').find('.badge-secondary').text(discNo + " " + single);
        }
        else {
            $(this).parents('.contract-section').find('.badge-secondary').text(discNo + " " + multiple);
        }
        $('.js_removeDiscount').on('click', function () {
            $(this).parent('.discount').remove();
        });
    });

    //ADD PERMISSION FIELD
    $('.js_addGranted').on('click', function () {
        $('#js_granted').clone().insertBefore('#js_addPermission');
    });
    //REMOVE PERMISSION FIELD
    $('.js_removeGranted').on('click', function () {
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
    $('.contract-section-header').on('click', function () {
        $(this).find('.arrow').toggleClass('rotate');
        $(this).parents().next('.more-data').slideToggle(200);
        $(this).parents('.history-item').toggleClass('border-highlight');
    });

    //POPULATE SECTION TAGS
    $('.pronounced-data').on('change', function () {
        var content = $(this).val();
        $(this).parents('.contract-section').find('.badge-secondary').html(content);
    });

    //LOAD MORE CONTRACT
    $(function () {
        var contHist = $('.contract-history').find('.contract-section');
        contHist.hide();
        $(function () {
            contHist.slice(0, 10).show();
            $('.load-more').on('click', function (e) {
                e.preventDefault();
                $('.contract-history').find('.contract-section:hidden').slice(0, 5).slideDown(150);
                if ($('.contract-history').find('.contract-section:hidden').length == 0) {
                    $('.load-more').hide();
                }
            });
        });
    });

    //LOAD MORE CONTRACT
    $(function () {
        var contHist = $('.rate-history').find('.contract-section');
        contHist.hide();
        $(function () {
            contHist.slice(0, 3).show();
            $('.load-more-rate').on('click', function (e) {
                e.preventDefault();
                $('.rate-history').find('.contract-section:hidden').slice(0, 5).slideDown(150);
                if ($('.rate-history').find('.contract-section:hidden').length == 0) {
                    $('.load-more-rate').hide();
                }
            });
        });
    });

    //REMOVE COST CENTER
    $('.js_addCostCenter').on('click', function () {
        var costCenter = '<div class="contract-section border-bottom" id="costCenter"> <div class="row"> <div class="col-12"> <div class="contract-section-header d-flex justify-content-between align-items-end pointer py-3"> <div class="form-title text-nowrap text-truncate"><span class="fas fa-chevron-up arrow"></span><span class="cost-center-name"></span></div><span class="badge badge-secondary js_removeCostCenter">remove cost center</span> </div></div></div><div class="row more-data"> <div class="col-12 col-sm-6 cost-center"> <label for="cost-center-name">cost center name *</label> <input type="text" name="cost-center-name" id="cost-center-val"> </div><div class="col-12 col-sm-6"> <label for="contract-partner-country">cost center country *</label> <div class="select-height-fix d-flex align-items-center"> <select name="contract-partner-country" class="w-100"> <option selected="">Select country</option> <option value="ch">Switzerland</option> <option value="de">Germany</option> <option value="lie">Lichtenstein</option> <option value="uk">UK</option> </select> </div></div><div class="col-12 col-sm-6"> <label for="cost-center-address">cost center address *</label> <input type="text" name="cost-center-address"> </div><div class="col-12 col-sm-6"> <label for="cost-center-city">cost center city *</label> <input type="text" name="cost-center-city"> </div><div class="col-12 col-sm-6"> <label for="cost-center-vat">cost center VAT (%) *</label> <input type="text" name="cost-center-vat"> </div><div class="col-12 col-sm-6"> <label for="cost-center-currency">cost center currency *</label> <div class="select-height-fix d-flex align-items-center"> <select name="cost-center-currency" class="w-100"> <option selected="">Select currency</option> <option value="ch">CHF</option> <option value="de">EUR</option> <option value="lie">RSD</option> <option value="uk">RON</option> </select> </div></div><div class="col-12"> <div class="row js_items"> <div class="col-12" id="js_item"> <div class="row"> <div class="col-12 col-lg-6 order-2 order-lg-1"> <label for="cost-center-person-name">cost center contact person name</label> <input type="text" name="cost-center-person-name"> </div><div class="col-12 col-lg-6 d-flex justify-content-between align-items-end order-1 order-lg-2"> <div class="w-100 mr-3"> <label for="cost-center-person-job">cost center contact person job</label> <input class="w-100" type="text" name="cost-center-person-job"> </div><span class="btn btn-symbol btn-secondary js_delete">×</span> </div><div class="col-12 col-sm-6 order-3"> <label for="cost-center-person-phone">cost center contact person phone no.</label> <input type="text" name="contract-partner-person-phone"> </div><div class="col-12 col-sm-6 order-4"> <label for="cost-center-person-email">cost center contact person email</label> <input type="text" name="cost-center-person-email"> </div></div></div></div><div class="row"> <div class="col-12"> <span class="btn btn-secondary my-3 js_clone">add contact person</span> </div></div></div></div></div>'
        $('.js_costCenters').append(costCenter);

        $('.js_removeCostCenter').on('click', function () {
            $(this).parents('.contract-section').remove();
        });
    });

    $('#cost-center-val').on('change', function () {
        var nameVal = $(this).val();
        $('.cost-center-name').text(nameVal);
    });


    //TODAYS DATE
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = (day < 10 ? '0' : '') + day + '.' + (month < 10 ? '0' : '') + month + '.' + d.getFullYear();
    $('input[name="contract-status-from"]').val(output);
    $('#todays-date').text(output);


    //CC select
    $('#cost-center-select').on('change', function () {
        var cc1 = {
            client: 'Crealogix Germany AG',
            address: 'Breitscheidstraße 10',
            postNo: '70174',
            city: 'Stuttgart',
            country: 'Germany',
            contactPerson: 'Ada Lovelace',
            job:'finance director',
            phone:'+49 30 901820',
            email:'ada.lovelace@comparis.de'
        }
        var cc2 = {
            client: 'Crealogix Germany GmbH',
            address: 'Talstraße 4',
            postNo: '04103',
            city: 'Leipzig',
            country: 'Germany',
            contactPerson: 'Gurt Meier',
            job:'finance manager',
            phone:'+49 30 901821',
            email:'gurt.meier@comparis.de'
        }
        var id = $(this).find("option:selected").attr("val");

        switch (id) {
            case "cc1":
                $('#client-name').text(cc1.client);
                $('#cost-center-address').text(cc1.address);
                $('#cost-center-post-no').text(cc1.postNo);
                $('#cost-center-city').text(cc1.city);
                $('#cost-center-country').text(cc1.country);
                $('#cc-name').text(cc1.contactPerson);
                $('#cc-job').text(cc1.job);
                $('#cc-phone').text(cc1.phone);
                $('#cc-phone').attr('href',cc1.phone);
                $('#cc-email').text(cc1.email);
                $('#cc-email').attr('href','mailto:' + cc1.email);
                break;
            case "cc2":
                $('#client-name').text(cc2.client);
                $('#cost-center-address').text(cc2.address);
                $('#cost-center-post-no').text(cc2.postNo);
                $('#cost-center-city').text(cc2.city);
                $('#cost-center-country').text(cc2.country);
                $('#cc-name').text(cc2.contactPerson);
                $('#cc-job').text(cc2.job);
                $('#cc-phone').text(cc2.phone);
                $('#cc-phone').attr('href',cc2.phone);
                $('#cc-email').text(cc2.email);
                $('#cc-email').attr('href', 'mailto:' + cc2.email);
                break;
        }
    });

    //bank account select
    $('#account-select').on('change', function () {
        var acc1 = {
            bank: 'Zürcher Kantonalbank',
            iban: 'CH1800700110005701947',
            accountNo: '1100-5701.947',
            country:'Switzerland'
        }
        var acc2 = {
            bank: 'Credit Suisse',
            iban: 'CH1800700110002132352',
            accountNo: '1300-4040.101',
            country:'Switzerland'
        }
        var val = $(this).find("option:selected").attr("val");

        switch (val) {
            case "zkb":
                $('#payment-account-bank-select').text(acc1.bank);
                $('#payment-account-iban-select').text(acc1.iban);
                $('#payment-account-no-select').text(acc1.accountNo);
                $('#payment-account-bank-print').text(acc1.bank);
                $('#payment-account-iban-print').text(acc1.iban);
                $('#payment-account-no-print').text(acc1.accountNo);
                $('#payment-account-country-print').text(acc1.country);
                break;
            case "credit suisse":
                $('#payment-account-bank-select').text(acc2.bank);
                $('#payment-account-iban-select').text(acc2.iban);
                $('#payment-account-no-select').text(acc2.accountNo);
                $('#payment-account-bank-print').text(acc2.bank);
                $('#payment-account-iban-print').text(acc2.iban);
                $('#payment-account-no-print').text(acc2.accountNo);
                $('#payment-account-country-print').text(acc2.country);
                break;
        }
    });

});