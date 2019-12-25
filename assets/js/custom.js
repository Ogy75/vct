$(function () {

    //vacation page log height fix
    if($(window).width() > 640){
    $('.height-fix').height($('.vct-days__remaining').height());
};

    //left side menu toggle block
    var menuToggleButton = $('.vct-left-nav-toggle');
    var menuToggleButtonIcon = $('.menu-icon');
    var menuPanel = $('.vct-left-nav');
    var contentExpand = $('.vct-content');
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
        menuPanel.addClass('hide-left');
        contentExpand.addClass('expanded');
    }
    menuToggleButton.on('click', function () {
        menuPanel.toggleClass('hide-left');
        contentExpand.toggleClass('expanded');
    });

    //left side menu toggle navigation
    var subMenuButton = $('a.has-level1');
    var subMenuItem = $('.vct-nav-level1');
    subMenuButton.on('click', function (ev) {
        var trigger = $(ev.target);
        trigger.toggleClass('btn-highlight');
        trigger.next(subMenuItem).slideToggle(200);
        trigger.toggleClass('has-level1-t');
    });

    //profile menu toggle
    var profile = $('.vct-user-profile-image img');
    var profileMenu = $('.vct-user-menu-block');

    profile.on('click', function () {
        profileMenu.fadeToggle(100);
    });
    $(document).click(function (event) {
        var target = $(event.target);
        if (!target.closest(profile).length &&
            $(profileMenu).is(":visible")) {
            $(profileMenu).fadeOut(100);
        }
    });

    //fullscreen function
    $(".full-view").on('click', function () {
        document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    });

    //deviation value
    $('.deviation').each(function (i, e) {
        var el = $(e);
        el.addClass(parseInt(el.val()) < 0 ? 'negative-value' : '');
    });

    //scroll hide
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.vct-top-nav, .vct-left-nav-toggle').addClass('nav-up');
        }
        if ($(window).scrollTop() < 201) {
            $('.vct-top-nav, .vct-left-nav-toggle').removeClass('nav-up');
            $('.vct-top-nav, .vct-left-nav-toggle').addClass('nav-down');
        }
    });

    //total toggle
    var card = $('.vct-total-toggle-card a');
    var totalPanel = $('.vct-total-toggle-wrapper');
    var totalPanelHeight = totalPanel.height();

    card.on('click', function () {
        totalPanel.slideToggle(100);
        card.find('i').toggleClass('ti-angle-up');
    });

    //tooltip ini
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    //notification badge demo /spinner
    setTimeout(function () {
        $('.alert').show().delay(1000).queue(function (n) {
            $('.lds-dual-ring-bg').fadeOut(200);
            $(this).hide();
        });
    }, 0);


    //back btn
    $('.vct-back').on('click', function () {
        window.history.back();
    });

    //add team member - time
    var teamMember = '<div class="py-3 vct-team-member-block"> <div class="row"> <div class="col-12 vct-team-member-name"> <span>Ime Prezime</span> <span class="temp-member">| temp. member</span> <div class="float-right h-100"> <div href="javascript:void(0)" class="item-menu fas fa-bars"> <div class="item-menu-wrapper"> <div class="arrow"></div> <ul> <span class="item-menu-title">Team Member options</span> <li><a href="javascript:void(0)">Export to Excel</a></li> <li><a href="javascript:void(0)">Generate & Download PDF</a></li> </ul> </div> </div> </div> </div> </div> <div class="row"> <div class="col-12"> <div class="row"> <div class="col-12 col-lg-2 align-self-end mt-3"> <div class="d-flex align-items-center vct-team-location"> <p class="w-100 text-center">Belgrade</p> </div> </div> <div class="col-3 col-lg-1 position-relative"> <label for="normal" data-toggle="tooltip" data-placement="top" title="Normal - vreme provedeno na komercijalnim projektima">Normal</label> <input type="text" value="0" name="normal"> </div> <div class="col-3 col-lg-1"> <label for="travel" data-toggle="tooltip" data-placement="top" title="Travel - vreme provedeno u putu prilikom odlaska kod klijenta">Travel</label> <input type="text" value="0" name="travel"> </div> <div class="col-3 col-lg-1"> <label for="totalWork">Total work</label> <input type="text" value="0" name="totalWork" disabled> </div> <div class="col-3 col-lg-1"> <label for="overtime" data-toggle="tooltip" data-placement="top" title="Overtime - rad na projektima radnim danima posle 19h i vikendima!">Overtime</label> <div class="vct-client-checkbox position-absolute" data-toggle="tooltip" data-placement="top" title="Odobreno od strane klijenta"><input type="checkbox"></div> <input type="text" value="0" name="overtime"> </div> <div class="col-3 col-lg-1"> <label for="eiInternal" data-toggle="tooltip" data-placement="top" title="Ei Internal - rad na internim projektima ili overhead koji je nastao usled administrativnih obaveza (razni sastanci, godisnji razgovori, itd.)">Ei internal</label> <input type="text" value="0" name="eiInternal"> </div> <div class="col-3 col-lg-1"> <label for="free" data-toggle="tooltip" data-placement="top" title="Free - fond sati koji dopunjuje ukupne mesecne sate - koristimo ga za nove kolege koji dodju u sred meseca pa time dopunimo vreme (npr. ako je neko dosao 15-og u mesecu posle 10 radnih dana u Free ce biti upisano 80h), takodje ga koristimo za kolege koji odlaze iz firme po slicnom principu).">Free</label> <input type="text" value="0" name="free"> <i class="info-modal-trigger ti-more-alt position-absolute" data-toggle="modal" data-target="#free"></i> </div> <div class="col-3 col-lg-1"> <label for="holidays" data-toggle="tooltip" data-placement="top" title="Holiday - vreme / dani koji se oduzimaju od fonda godisnjeg odmora">Holidays</label> <input type="text" value="0" name="holidays"> <i class="info-modal-trigger ti-more-alt position-absolute" data-toggle="modal" data-target="#holidays"></i> </div> <div class="col-3 col-lg-1"> <label for="sickness" data-toggle="tooltip" data-placement="top" title="Sickness - bolovanja">Sickness</label> <input type="text" value="0" name="sickness"> <i class="info-modal-trigger ti-more-alt position-absolute" data-toggle="modal" data-target="#sickness"></i> </div> <div class="col-3 col-lg-1"> <label for="daysOff" data-toggle="tooltip" data-placement="top" title="Days off - slobodni dani na ime zakonskog prava (slava, vencanje, rodjenje deteta,...)">Days Off</label> <input type="text" value="0" name="daysOff"> <i class="info-modal-trigger ti-more-alt position-absolute" data-toggle="modal" data-target="#daysOff"></i> </div> <div class="col-3 col-lg-1"> <label for="total">Total</label> <input type="text" value="0" name="total" disabled> </div> </div> <div class="row"> <div class="col-12 col-lg-2 align-self-end mt-3"> <div class="d-flex align-items-center vct-team-location"> <p class="w-100 text-center">On-site</p> </div> </div> <div class="col-3 col-lg-1"> <label for="normal" data-toggle="tooltip" data-placement="top" title="Normal - vreme provedeno na komercijalnim projektima">Normal</label> <input type="text" value="0" name="normal"> </div> <div class="col-3 col-lg-1"> <label for="travel" data-toggle="tooltip" data-placement="top" title="Travel - vreme provedeno u putu prilikom odlaska kod klijenta">Travel</label> <input type="text" value="0" name="travel"> </div> <div class="col-3 col-lg-1"> <label for="totalWork">Total work</label> <input type="text" value="0" name="totalWork" disabled> </div> <div class="col-3 col-lg-1"> <label for="overtime" data-toggle="tooltip" data-placement="top" title="Overtime - rad na projektima radnim danima posle 19h i vikendima!">Overtime</label> <div class="vct-client-checkbox position-absolute" data-toggle="tooltip" data-placement="top" title="Odobreno od strane klijenta"><input type="checkbox"></div> <input type="text" value="0" name="overtime"> </div> <div class="col-3 col-lg-1"> <label for="eiInternal" data-toggle="tooltip" data-placement="top" title="Ei Internal - rad na internim projektima ili overhead koji je nastao usled administrativnih obaveza (razni sastanci, godisnji razgovori, itd.)">Ei internal</label> <input type="text" value="0" name="eiInternal"> </div> <div class="col-3 col-lg-1"> <label for="free" data-toggle="tooltip" data-placement="top" title="Free - fond sati koji dopunjuje ukupne mesecne sate - koristimo ga za nove kolege koji dodju u sred meseca pa time dopunimo vreme (npr. ako je neko dosao 15-og u mesecu posle 10 radnih dana u Free ce biti upisano 80h), takodje ga koristimo za kolege koji odlaze iz firme po slicnom principu).">Free</label> <input type="text" value="0" name="free"> </div> <div class="col-3 col-lg-1"> <label for="holidays" data-toggle="tooltip" data-placement="top" title="Holiday - vreme / dani koji se oduzimaju od fonda godisnjeg odmora">Holidays</label> <input type="text" value="0" name="holidays"> </div> <div class="col-3 col-lg-1"> <label for="sickness" data-toggle="tooltip" data-placement="top" title="Sickness - bolovanja">Sickness</label> <input type="text" value="0" name="sickness"> </div> <div class="col-3 col-lg-1"> <label for="daysOff" data-toggle="tooltip" data-placement="top" title="Days off - slobodni dani na ime zakonskog prava (slava, vencanje, rodjenje deteta,...)">Days Off</label> <input type="text" value="0" name="daysOff"> </div> <div class="col-3 col-lg-1"> <label for="total">Total</label> <input type="text" value="0" name="total" disabled> </div> </div> </div> <div class="col-3 col-lg-1"> <label for="deviation" data-toggle="tooltip" data-placement="top" title="Odsutupanje od potrebnog vremena">Deviation</label> <input class="deviation" type="text" value="0" name="deviation" disabled> </div> </div> <div class="row align-items-end mb-3"> <div class="col-12 col-md-7"> <label for="notes">Notes</label> <textarea name="notes" rows="3"></textarea> </div> <div class="col-12 col-md-5 mt-2 text-left text-md-right"> <button type="button" class="btn btn-highlight px-4">Save</button> </div> </div> </div>';

    $(document).on('click', '.add-team-member', function () {
        $('.team-members').append(teamMember);
    });
    $(document).on('click', '.remove-team-member', function () {
            $(this).closest($('.vct-team-member-block')).addClass('hide');
    });

    //add team member - team
    var teamMember1 = '<div class="py-3 vct-team-member-block "> <div class="row mb-3 "> <div class="col-5 vct-team-member-name font-weight-normal "> <label for="employees ">employee name</label> <input class="w-100 negative-value" id="employees " placeholder="enter name " value="Paja Milojkovic " /> </div> <div class="col-5 vct-team-member-name font-weight-normal "> <label for="employees ">position</label> <input class="w-100 " id="position " placeholder="find position " value="Team Lead " /> </div> <div class="col-2 "> <div class="d-flex text-right justify-content-end align-items-center h-100 mt-2"> <div class="item-menu fas fa-ellipsis-v"> <div class="item-menu-wrapper"> <div class="arrow"></div> <ul> <span class="item-menu-title">Operations options</span> <li><a href="javascript:void(0)">Remove Team Member</a></li> </ul> </div> </div> </div> </div> </div> </div>';

    $(document).on('click', '.add-team-member1', function () {
        $('.team-members').append(teamMember1);
    });
    $(document).on('click', '.remove-team-member1', function () {
        $(this).closest($('.vct-team-member-block')).addClass('hide');
    });

    //add operations manager
    var teamMember2 = '<div class="py-3 vct-team-member-block"> <div class="row mb-3 "> <div class="col-10 col-md-6 vct-team-member-name font-weight-normal"> <label for="employees">Operations officer</label> <input class="w-100" id="employees" placeholder="enter name " value="Vladimir Jovanović" /> </div> <div class="col-2 col-md-6"> <div class="d-flex text-right justify-content-end align-items-center h-100 mt-2"> <div class="item-menu fas fa-ellipsis-v"> <div class="item-menu-wrapper"> <div class="arrow"></div> <ul> <span class="item-menu-title">Operations options</span> <li><a href="javascript:void(0)">Remove Operations Officer</a></li> </ul> </div> </div> </div> </div> </div> </div>';

    $(document).on('click', '.add-team-member2', function () {
        $('.team-members').append(teamMember2);
    });
    $(document).on('click', '.remove-team-member2', function () {
        $(this).closest($('.vct-team-member-block')).addClass('vtc-hide');
    });


    //add member autocomplete
    var employees = {
        url: "/employees.json",
        getValue: "name",
        list: {
            match: {
                enabled: true
            }
        }
    };

    //nice select ini
    $('select').niceSelect();

    //add new team to existing project
    var trigger = $('.add-new-team');
    var teamSelect = $('.vct-select-team');
    var newTeam = $('.vct-new-team-wrapper');
    var inputVal = $('.vct-team-member-name input');
    var newTeamBtn = $('.add-new-team');
    var saveBtn = $('.save-new-team');
    var teamMemberBlock = $('.vct-team-member-block');
    var deleteTeam = $('.delete-team');
    var editTeam = $('.ti-pencil');
    trigger.on('click', function () {
        teamSelect.hide();
        newTeam.show().focus();
        inputVal.val('');
        newTeamBtn.hide();
        saveBtn.text('Save Team');
        teamMemberBlock.remove();
        deleteTeam.hide();
        $('.error-message').hide();
        editTeam.hide();
        $('.save-new-team').prop('disabled', true);
    });

    //enable save button
    var saveBtn = $('.save-new-team');
    $('input.vct-new-team').on('keyup', function () {
        if ($(this).val() != "") {
            saveBtn.prop('disabled', false);
        } else {
            saveBtn.prop('disabled', true);
        }

        //new project button height adjustment
        var projectHeight = $('.vct-team-wrapper').height();
        var newProject = $('.add-new-project');
        newProject.css('min-height', projectHeight);
    });

    //Rename project
    var renameProj = $('.edit-proj');
    var inputProj = $('.rename-project');
    var projTitle = $('.project-title');
    renameProj.on('click', function(){
        projTitle.hide();
        inputProj.removeClass('d-none');
    });

    //toggle clear btn to search
    $('.filter-projects').keyup(function(){
        var s = $(this).val();
        if(s.length > 0){
            $('.reset-query').show();
        }
        else{
            $('.reset-query').hide();
        }
      });
      //Clear&focus btn fn.
      $('.reset-query').on('click', function(){
        $('.filter-projects').val('').focus();
        $('.reset-query').hide();
      });


      //Live Search
      $(document).ready(function(){
        $(".filter-projects").keyup(function(){
            $('.add-team').remove();
            var filter = $(this).val(), count = 0;
                $(".vct-team").each(function(){     
                if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                    $(this).hide();
                } else {
                    $(this).show();
                    count++;
                }
            });
            if (count > 0) {
                $(".no-results-message").hide();
            } else {
                $(".no-results-message").show();
            }
        });
    });

    //Toggle column menu
    $('.item-menu').on('click', function (ev) {
        var trigger = ev.target;
        $(trigger).find($('.item-menu-wrapper')).toggle();
        $(trigger).parent('.file-tree-entry').addClass('entry-selected');
    });
    $('.item-menu-wrapper').on('click', function(){
        $(this).hide();
    });
    $(document).mouseup(function (e) {
        var container = $('.item-menu-wrapper');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
});

//Generate pdf  - za potrebe simulacije
$('.js_generate').on('click', function(ev){
    var trigger = $(ev.target);
    var element = trigger.parents('.parent').find('.pdf-report');
    if(!element.hasClass('fa-file-pdf')){
    element.removeClass('d-none');
    element.css('background', 'url("/assets/images/micro-loader.gif")').delay(3000).queue(function(){
        element.addClass('fa-file-pdf');
        element.css('background', 'transparent');
        trigger.remove();
    });
    }
});

$('.js_generateZip').on('click', function(ev){
    var trigger = $(ev.target);
    var element = trigger.parents('.parent').find('.pdf-report');
    if(!element.hasClass('fa-file-archive')){
    element.removeClass('d-none');
    element.css('background', 'url("/assets/images/micro-loader.gif")').delay(3000).queue(function addPdfs(){
        element.addClass('fa-file-archive');
        element.css('background', 'transparent');
        trigger.remove();
    });
    }
});