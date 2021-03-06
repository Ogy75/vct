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

    // Cost filter
    $('#find-cost').keyup(function () {
        var filter = $(this).val(),
            count = 0;
        $('.cost-item').each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
            } else {
                $(this).show();
                count++;
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
            //$('.vct-actions').hide();
        }
        else {
            $('.no-results-message').show();
            //$('.vct-actions').hide();
        }
    });

    //toggle clear btn to search
    $('#find-cost').keyup(function () {
        var s = $(this).val();
        if (s.length > 0) {
            $('.reset-input').show();
        } else {
            $('.reset-input').hide();
        }
    });

    //Clear&focus btn fn.
    $('.reset-input').on('click', function () {
        $('#find-cost').val('').focus();
        $('.reset-input').hide();
        $('.cost-item').show();
        $('.no-results-message').hide();
    });

    // absences filter
    $('.find-member').keyup(function () {
        var filter = $(this).val(),
            count = 0;
        $('.panel-table tbody tr').each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();
                $('.panel-table tfoot').hide();
            } else {
                $(this).show();
                count++;
                $('.panel-table tfoot').show();
            }
        });
        if (count > 0) {
            $('.no-results-message').hide();
            $('.panel-table thead').show();
            //$('.panel-table tfoot').show();
        } else {
            $('.no-results-message').show();
            $('.panel-table thead').hide();
            //$('.panel-table tfoot').hide();
        }
    });

    //absence Clear&focus btn fn.
    $('.reset-input').on('click', function () {
        $('.find-project').val('').focus();
        $('.reset-input').hide();
        $('.panel-table tbody tr').show();
        $('.panel-table thead').show();
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
            $('.period-invoices').show();
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
            $('.period-invoices').hide();
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
        $('.overlap').show();
        $('.table-wrapper').css('overflow', 'hidden');
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
    $('.js_addCostItem').on('click', function () {
        $(this).parents('.js_cost-table-parent').find('.js_cost-table').append('<tr> <td><textarea rows="2" placeholder="cost description"></textarea></td><td class="text-center"> <select> <option selected>RSD</option> <option>EUR</option> <option>CHF</option> <option>RON</option> </select> </td><td><input type="text" placeholder="cost amount"/></td><td class="text-right"><span class="badge badge-danger pointer js_removeEntry">delete</span></td></tr>');
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
        var form = '<div class="col-12 js_item" id="js_item-1"> <div class="border p-3 mb-3"> <div class="row"> <div class="col-12 d-flex justify-content-end"> <span class="btn btn-symbol mt-n2 mr-n2 js_delete-1">×</span> </div><div class="col-12 d-flex justify-content-between align-items-end"> <div class="w-100"> <label for="my-company-name">internal position *</label> <div class="select-height-fix d-flex align-items-center"> <select name="my-company-name" class="w-100"> <option selected="">Select Internal position</option> <option>Team Lead</option> <option>Senior N1</option> <option>Senior N2</option> <option>Professional N1</option> <option>Professional N2</option> <option>Engineer N1</option> <option>Engineer N2</option> </select> </div></div></div><div class="col-12"> <label for="contract-position">commercial position *</label> <input type="text" name="contract-position"> </div><div class="col-12 col-sm-6"> <div class="row"> <div class="col-6"> <label for="rate">rate (CHF)</label> <input type="text" name="rate"> </div><div class="col-6"> <label for="rate-on-site">rate on-site (CHF)</label> <input type="text" name="rate-on-site"> </div></div></div><div class="col-12 col-sm-6"> <label for="rate-valid-from">rate valid from</label> <input type="text" name="rate-valid-from"> </div></div></div></div>';
        var container = $('.js_items-1');
        $(form).appendTo($(container));
        $('.js_delete-1').on('click', function () {
            $(this).parents('.js_item').remove();
        });
    });

    //commercial rate display
    $('input[name="contract-position"]').on('keyup', function () {
        var comPosition = $(this).val();
        $(this).parents('.js_item').find('.form-title').text(comPosition);
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

    //ENABLE AKONTO
    $('#akonto-payment').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).parents('.more-data').find('input').prop('disabled', false);
            $(this).val('akonto payment');
        }
        else {
            $(this).parents('.more-data').find('input[type=text]').prop('disabled', true);
            $(this).val('recurring payment');
        }
    });

    //SETUP FEE POSSIBLE
    $('#ancillary-setup-fee').on('change', function () {
        if ($(this).prop('checked')) {
            $(this).parents('.more-data').find('textarea[name="ancillary-setup-fee"]').prop('disabled', false);
            $(this).parents('.more-data').find('.mandatory').show();
            $(this).val('Setup fee exists');
        }
        else {
            $(this).parents('.more-data').find('textarea[name="ancillary-setup-fee"]').prop('disabled', true);
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
        var overall = '<div class="col-12 mt-4 d-flex justify-content-between align-items-center discount js_overall"> <div class="d-flex align-items-center"> <input type="text" class="d-inline-block small-input" /> <p class="mx-1">% overall discount</p> </div> <button class="d-inline-block btn btn-symbol ml-2 js_removeDiscount">&times;</button> </div>';
        var teamSize = '<div class="col-12 mt-4 d-flex justify-content-between align-items-center discount"> <div class="d-flex align-items-center"> <input type="text" class="d-inline-block small-input" /> <p class="mx-1">% discount on team count over</p> <input type="text" class="d-inline-block small-input" /> </div> <button class="d-inline-block btn btn-symbol ml-2 js_removeDiscount">&times;</button> </div>';
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

    //accordion SECTION TOGGLE
    $('.js_accordion').on('click', function () {
        $(this).find('.arrow').toggleClass('rotate');
        $(this).parents('.cost-item').find('.more-data').slideToggle(100);
        $(this).parents('.cost-item').toggleClass('border-highlight');
        if ($(this).parents('.cost-item').siblings().hasClass('border-highlight')) {
            $(this).parents('.cost-item').siblings().removeClass('border-highlight');
            $(this).parents('.cost-item').siblings().find('.more-data').slideUp(100);
            if ($(this).parents('.cost-item').siblings().find('.arrow').hasClass('rotate')) {
                $(this).parents('.cost-item').siblings().find('.arrow').removeClass('rotate');
            }
        }
    });

    //CONTRACT SECTION TOGGLE
    $('.contract-section-header').on('click', function () {
        $(this).find('.arrow').toggleClass('rotate');
        $(this).parents('.contract-section').find('.more-data').slideToggle(100);
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
    //$('#todays-date').text(output);
    $('#absent-from').attr('value', output);


    //CC select
    $('#cost-center-select').on('change', function () {
        var cc1 = {
            client: 'Crealogix Germany AG',
            address: 'Breitscheidstraße 10',
            postNo: '70174',
            city: 'Stuttgart',
            country: 'Germany',
            contactPerson: 'Ada Lovelace',
            job: 'finance director',
            phone: 'tel:+4930901820',
            email: 'ada.lovelace@comparis.de'
        }
        var cc2 = {
            client: 'Crealogix Germany GmbH',
            address: 'Talstraße 4',
            postNo: '04103',
            city: 'Leipzig',
            country: 'Germany',
            contactPerson: 'Gurt Meier',
            job: 'finance manager',
            phone: 'tel:+4930901821',
            email: 'gurt.meier@comparis.de'
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
                $('#cc-phone').prop('href', cc1.phone);
                $('#cc-phone').attr('href', cc1.phone);
                $('#cc-email').text(cc1.email);
                $('#cc-email').attr('href', 'mailto:' + cc1.email);
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
                $('#cc-phone').prop('href', cc2.phone);
                $('#cc-phone').attr('href', cc2.phone);
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
            country: 'Switzerland'
        }
        var acc2 = {
            bank: 'Credit Suisse',
            iban: 'CH1800700110002132352',
            accountNo: '1300-4040.101',
            country: 'Switzerland'
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

    //COST TYPE
    $('#cost-center-select').on('change', function () {
        var val = $(this).find("option:selected").attr("val");
        switch (val) {
            case "travel":
                $('.cost-type').hide();
                $('#travel-cost').show();
                break;
            case "hotel":
                $('.cost-type').hide();
                $('#hotel-cost').show();
                break;
            case "local transportation":
                $('.cost-type').hide();
                $('#local-transport-cost').show();
                break;
            case "education":
                $('.cost-type').hide();
                $('#education-cost').show();
                break;
            case "additional":
                $('.cost-type').hide();
                $('#additional-cost').show();
                break;
        }
    });

    //travel direction
    $('#travel-direction').on('change', function () {
        var val = $(this).find("option:selected").attr("val");
        switch (val) {
            case "round trip":
                $('input[name="travel-return-date"]').attr('disabled', false);
                $('input[name="travel-departure-date"]').attr('disabled', false);
                break;
            case "one way":
                $('input[name="travel-return-date"]').attr('disabled', true);
                $('input[name="travel-return-date"]').val('');
                break;
            default:
                $('input[name="travel-return-date"]').attr('disabled', false);
                $('input[name="travel-departure-date"]').attr('disabled', false);
                break;
        }
    });

    //ancillary total currency
    $('select#ancillary-total-currency').on('change', function () {
        var val = $(this).find("option:selected").attr('val');
        switch (val) {
            case "EUR":
                $('span#ancillary-total-amount').prop('class', 'font-weight-bold badge badge-primary');
                $('span#ancillary-total-amount').text('681,74').addClass('eur');
                break;
            case "CHF":
                $('span#ancillary-total-amount').prop('class', 'font-weight-bold badge badge-primary');
                $('span#ancillary-total-amount').text('731,22').addClass('chf');
                break;
            case "RSD":
                $('span#ancillary-total-amount').prop('class', 'font-weight-bold badge badge-primary');
                $('span#ancillary-total-amount').text('80.169,62').addClass('rsd');;
                break;
            case "RON":
                $('span#ancillary-total-amount').prop('class', 'font-weight-bold badge badge-primary');
                $('span#ancillary-total-amount').text('3.294,53').addClass('ron');;
                break;
        }
    });

    //invoicing company switch
    $('#invoice-company').on('change', function () {
        var val = $(this).find("option:selected").attr('val');
        var yc = '';
        var nsm = '';
        switch (val) {
            case "NSM AG":
                $('#invoice-company-logo').attr('src', 'assets/images/logo-nsmeng.svg');
                $('.company-data').hide();
                $('#company-nsm').show();
                $('#vat-no').text('CHE-141.994.256 MWST');
                break;
            case "YC AG":
                $('#invoice-company-logo').attr('src', 'assets/images/logo-youngculture.svg');
                $('.company-data').hide();
                $('#company-yc').show();
                $('#vat-no').text('CHE-108.543.612 MWST');
                break;
        }
    });


    //ADD TRAVEL COST DEMO
    // $('#add-cost').on('click', function () {
    //     var passengerName = $('input[name="passenger-name"]').val();
    //     var travelBy = $('#travel-by option:selected').val();
    //     var travelDirection = $('#travel-direction option:selected').val();
    //     var departureLocation = $('input[name="travel-from"]').val();
    //     var destination = $('input[name="travel-to"]').val();
    //     var departureDate = $('input[name="travel-departure-date"]').val();
    //     var returnDate = $('input[name="travel-return-date"]').val();
    //     var travelCost = $('input[name="travel-cost"]').val();
    //     var currency = $('#travel-currency option:selected').val();
    //     var travel = '<div class="cost-item mt-2 px-3 border"> <div class="row"> <div class="col-12 js_accordion pointer"> <div class="row py-2 d-flex align-items-center"> <div class="col-6 col-xl-3 mb-2 mb-xl-0"> <div class="history-entry d-flex justify-content-start align-items-center"> <span class="fas fa-chevron-down arrow"></span> <div> <label class="m-0">name</label> <span class="cost-data">'
    //         + passengerName +
    //         '</span> </div></div></div><div class="col-6 col-xl-3 mb-2 mb-xl-0"> <label class="m-0">cost type</label> <span class="travel-plane"><span class="fas fa-plane mr-1"></span class="cost-data">travel</span> </div><div class="col-6 col-xl-3 mb-2 mb-xl-0"> <label class="m-0">itinerary</label> <span class="cost-data">'
    //         + departureLocation +
    //         " - "
    //         + destination
    //         + " - "
    //         + departureLocation +
    //         '</span> </div><div class="col-6 col-xl-2 mb-2 mb-xl-0"> <label class="m-0">cost</label> <span class="cost-data">'
    //         + travelCost +
    //         '<span class="rsd"></span></span> </div></div></div></div><div class="row more-data pb-3" style="display: none;"> <div class="col-12"> <div class="table-wrapper mt-3"> <div class="form-title text-nowrap text-truncate">details</div><table class="panel-table"> <thead> <tr> <th>departure date</th> <th>return date</th> <th>travel direction</th> </tr></thead> <tbody> <tr> <td><span>'
    //         + departureDate +
    //         '</span></td><td>'
    //         + returnDate +
    //         '</td><td>'
    //         + travelDirection +
    //         '</td></tr></tbody> </table> <div class="mt-3"> <button class="btn btn-highlight mr-2" data-toggle="modal" data-target="#editCost">edit cost</button> <button class="btn btn-danger" data-toggle="modal" data-target="#deleteCost">delete cost</button> </div></div></div></div></div>';
    //     $('.cost-entries').prepend(travel);
    // });

    //TOGGLE NEARSHORING
    $('#nearshoring').click(function () {
        if ($(this).prop('checked') == true) {
            $('#nearshoring-fee').show();
        }
        else {
            $('#nearshoring-fee').hide();
        }
    });
    $('#travel').click(function () {
        if ($(this).prop('checked') == true) {
            $('#travel-fee').show();
        }
        else {
            $('#travel-fee').hide();
        }
    });

    $('#additional').click(function () {
        if ($(this).prop('checked') == true) {
            $('#additional-fees').show();
            $('.cost-config').show();
        }
        else {
            $('#additional-fees').hide();
            $('.cost-config').hide();
        }
    });

    $('#hotel').click(function () {
        if ($(this).prop('checked') == true) {
            $('#hotel-fee').show();
        }
        else {
            $('#hotel-fee').hide();
        }
    });

    $('#local-trans').click(function () {
        if ($(this).prop('checked') == true) {
            $('#local-trans-fee').show();
        }
        else {
            $('#local-trans-fee').hide();
        }
    });

    $('#education').click(function () {
        if ($(this).prop('checked') == true) {
            $('#education-fee').show();
        }
        else {
            $('#education-fee').hide();
        }
    });


    //INVOICE CALC koji ne radi :(
    $('input[type="checkbox"]').on('change', function () {
        var nearshor = parseFloat($('#nearshoring-amount:visible').text()) * 1000000;
        var travel = parseFloat($('#travel-amount:visible').text()) * 1000;
        var hotel = parseFloat($('#hotel-amount:visible').text());
        var local = parseFloat($('#local-trans-amount:visible').text());
        var edu = parseFloat($('#education-amount:visible').text());
        var totalbeforeTax = (nearshor + travel + hotel + local + edu);
        $('#total-before-vat').text(totalbeforeTax).append('<span class="eur"></span>');
        var vatPercent = parseFloat($('#vat-percent:visible').text());
        var vatAmount = (totalbeforeTax / 100) * vatPercent;
        $('#total-vat-amount').text(vatAmount).append('<span class="eur"></span>');
        $('#payment-amount').text(vatAmount + totalbeforeTax).append('<span class="eur"></span>');
    });


    //ABSENCE TYPE SELECT

    $('#absence-type-option').on('change', function () {
        var val = $(this).find("option:selected").attr('val');
        switch (val) {
            case "Sickleave":
                $('.absence-type').hide();
                $('#sickleave').show();
                $('#absence-type').text(val);
                $('#absence-description').text('When adding sickleave bla bla bla, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
                break;
            case "Sickleave 30+ days":
                $('.absence-type').hide();
                $('#sickleave30').show();
                $('#absence-type').text(val);
                $('#absence-description').text('When adding sickleave 30+ days bla bla bla, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Officia deserunt mollit anim id est laborum.');
                break;
            case "Travel":
                $('.absence-type').hide();
                $('#travel').show();
                $('#absence-type').text(val);
                $('#absence-description').text('When adding travel period bla bla bla, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Officia deserunt mollit anim id est laborum. , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.');
                break;
            case "Slava":
                $('.absence-type').hide();
                $('#slava').show();
                $('#absence-type').text(val);
                $('#absence-description').text('When adding Slava day bla bla bla, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Officia deserunt mollit anim id est laborum. , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.');
                break;
        }
    });

    //ADD ABSENCE
    $('#add-absence').on('click', function () {
        var employee = $('#absent-employee').val();
        var from = $('#absent-from').val();
        var to = $('#absent-to').val();
        var type = $('#absence-type-option').find("option:selected").attr('val');
        console.log('HA HA');
        $('#absences-log').prepend('<tr><td>' + employee + '</td>' + '<td>' + 'Belgrade' + '</td>' + '<td>' + from + '</td>' + '<td>' + to + '</td>' + '<td>' + type + '</td>' + '<td><span class="badge badge-success">edit</span><span class="badge badge-danger ml-1">delete</span></td>' + '</tr>');
    });

    //INVOICE DISCOUNT
    //ENABLE CONTRACT RATE ADJUSTMENT
    $('#invoice-discount').on('change', function () {
        if ($(this).prop('checked')) {
            $('#discount').show();
            $(this).parents('.more-data').find('input').prop('disabled', false);
            $(this).parents('.more-data').find('select').prop('disabled', false);
            $(this).val('possible');
            $(this).parents('.more-data').find('textarea').prop('disabled', false);
        }
        else {
            $(this).parents('.more-data').find('input[type=text]').prop('disabled', true);
            $('#discount').hide();
            $(this).parents('.more-data').find('select').prop('disabled', true);
            $(this).val('not possible');
            $(this).parents('.more-data').find('textarea').prop('disabled', true);
        }
    });

    //INVOICE SWITCH
    $('.btn-invoice').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.btn-invoice').removeClass('selected');
        $('.tab-content').hide();
        $('.invoice-preview').hide();

        $(this).addClass('selected');
        $("#" + tab_id).show();
        $("#" + tab_id + 'preview').show();
    });

    //NOTIFICATIONS
    $(function () {
        $('.js_notificationCount').text($('.my-notification').length);
        $('.close-item').on('click', function () {
            $(this).parents('.my-notification').remove();
            $('.js_notificationCount').text($('.my-notification').length);
            if ($('.my-notification').length < 1) {
                $('.js_notificationCount').hide();
                $('.no-notifications-message').show();
            }
            else {
                $('.js_notificationCount').show();
                $('.no-notifications-message').hide();
            }
        });
    });

    //RELOAD
    $('#refresh').on('click', function () {
        location.reload();
    });

    //INV NO
    $('#inv-02-no-val').on('keyup', function () {
        var no = $(this).val();
        $('#inv-02-no').text(no);
    });

    //APPEND TO OTHER COSTS
    $('#add-other-cost').on('click', function () {
        var otherCostDesc = $('#other-cost-desc').val();
        var qty = $('#qty').val();
        var icc = $('#int-cost-center').val();
        var pricePerItem = $('#price-per-item').val();
        var total = pricePerItem * qty;
        var row = '<tr><td>' + icc + '</td><td>' + otherCostDesc + '</td><td>' + qty + '</td><td>' + total + '<span class="eur"></span></td><td class="text-right"> <a href="javascript:void(0)" class="badge badge-secondary">remove</a> </td></tr>';
        $('#other-costs').find('tbody').append(row);
        $('#other-cost-desc').val('');
        $('#qty').val('');
        $('#price-per-item').val('');
    });

    //ADD INTERNAL COST CENTER
    $('#add-int-cc').on('click', function () {
        var ccNo = $('#int-cc-no').val();
        var ccName = $('#int-cc-name').val();
        var cc = '<span class="badge badge-technology mr-2 mt-2"><span class="pr-1" id="icc-no">' + ccNo + '</span> <span id="icc-name">' + ccName + '</span><i class="close-badge fas fa-window-close"></i></span>';
        $('#internal-cost-centers-list').append(cc);
        $('#int-cc-no').val('');
        $('#int-cc-name').val('');
    });

    //HAS INT CCs Switch
    $('#internal-cost-center').on('change', function () {
        if ($(this).prop('checked')) {
            $('.int-cc').show();
            $(this).parents('.contract-section').find('.badge-secondary').text('has internal cost centers');
        }
        else {
            $('.int-cc').hide();
            $(this).parents('.contract-section').find('.badge-secondary').text('no internal cost centers');
        }
    });

    //COST HANDLING
    $('.js_removeCost').on('click', function () {
        $(this).parents('.invoice-items-group').remove();
    });

    //INVOICE LOCK
    $('#invoice-lock').on('change', function () {
        if ($(this).prop('checked')) {
            $('#lock-status').removeClass('badge-warning');
            $('#lock-status').addClass('badge-success').text('ready');
        }
        else {
            $('#lock-status').removeClass('badge-success');
            $('#lock-status').addClass('badge-warning').text('not ready');
        }
    });

    //REPORT SWITCH
    $('.js_reportBtn').click(function () {
        var tab_id = $(this).attr('data-type');
        $('.js_reportBtn').removeClass('selected');
        $(this).addClass('selected');
        $('.report-table').hide();
        $("#" + tab_id).show();
    });

    //ANCILLARY COSTS EXCLUDE INCLUDE
    $('.js_exclude').on('click', function () {
        if (($(this).text()) === 'exclude') {
            $(this).removeClass('badge-warning');
            $(this).addClass('badge-success');
            $(this).text('include');
            $(this).parents('tr').addClass('bg-warning');
        }
        else if (($(this).text()) === 'include') {
            $(this).addClass('badge-warning');
            $(this).removeClass('badge-success');
            $(this).text('exclude');
            $(this).parents('tr').removeClass('bg-warning');
        }
    });

    //Parent Child Co select
    $('select[name="company-tree"]').change(function () {
        var value = $(this).find('option:selected').attr('value');

        switch (value) {
            case "child-co":
                $(this).parents('.more-data').find('#select-parent').show();
                break;
            case "parent-co":
                $(this).parents('.more-data').find('#select-parent').hide();
                break;

        }
    });

    //RATES

    $('#jsRates').on('change', function () {
        var id = $(this).find("option:selected").attr("id");
        switch (id) {
            case "1":
                $('.rate').hide();
                $('#ratesChartChf').show();
                break;
            case "2":
                $('.rate').hide();
                $('#ratesChartRsd').show();
                break;
            case "3":
                $('.rate').hide();
                $('#ratesChartRon').show();
                break;
            case "4":
                $('.rate').hide();
                $('#ratesChartGbp').show();
                break;
        }
    });

});