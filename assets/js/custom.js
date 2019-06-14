$(function () {

    //left side menu toggle block
    var menuToggleButton = $('.vct-left-nav-toggle');
    var menuToggleButtonIcon = $('.menu-icon');
    var menuPanel = $('.vct-left-nav');
    var contentExpand = $('.vct-content');
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
        menuPanel.addClass('hide-left');
        contentExpand.addClass('expanded').addClass('vct-content');
    }
    menuToggleButton.on('click', function () {
        menuPanel.toggleClass('hide-left');
        contentExpand.toggleClass('expanded');
        if (windowWidth < 1281) {
            $('.vct-left-nav-wrapper').toggleClass('shadow-sm');
        }
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

    //notification badge demo
    setTimeout(function () {
        $('.vct-notification').show().delay(5000).queue(function (n) {
            $(this).hide(); n();
        });
    }, 0);



    //back btn
    $('.vct-back').on('click', function () {
        window.history.back();
    });

    //add team member
    var teamMember = '<div class="p-2 vct-team-member-block"> <div class="row"> <div class="col-6 vct-team-member-name font-weight-normal"> <label for="employees">employee name</label> <input class="w-100" id="employees" placeholder="enter name"/> </div> <div class="col-6"> <button type="button" class="remove-team-member btn float-right px-2 py-0 mt-3"><i class="ti-close"></i></button> </div> </div> <div class="row"> <div class="col-12"> <div class="row"> <div class="col-3 col-lg-2 align-self-end"> <div class="d-flex align-items-center vct-team-location"> <p class="w-100 text-center">Belgrade</p> </div> </div> <div class="col-3 col-lg-1 position-relative"> <label for="normal" data-toggle="tooltip" data-placement="top" title="Normal - vreme provedeno na komercijalnim projektima">Normal</label> <input type="text" value="0" name="normal"> </div> <div class="col-3 col-lg-1"> <label for="travel" data-toggle="tooltip" data-placement="top" title="Travel - vreme provedeno u putu prilikom odlaska kod klijenta">Travel</label> <input type="text" value="0" name="travel"> </div> <div class="col-3 col-lg-1"> <label for="totalWork">Total work</label> <input type="text" value="0" name="totalWork"> </div> <div class="col-3 col-lg-1"> <label for="overtime" data-toggle="tooltip" data-placement="top" title="Overtime - rad na projektima radnim danima posle 19h i vikendima!">Overtime</label> <input type="text" value="0" name="overtime"> </div> <div class="col-3 col-lg-1"> <label for="eiInternal" data-toggle="tooltip" data-placement="top" title="Ei Internal - rad na internim projektima ili overhead koji je nastao usled administrativnih obaveza (razni sastanci, godisnji razgovori, itd.)">Ei internal</label> <input type="text" value="0" name="eiInternal"> </div> <div class="col-3 col-lg-1"> <label for="free" data-toggle="tooltip" data-placement="top" title="Free - fond sati koji dopunjuje ukupne mesecne sate - koristimo ga za nove kolege koji dodju u sred meseca pa time dopunimo vreme (npr. ako je neko dosao 15-og u mesecu posle 10 radnih dana u Free ce biti upisano 80h), takodje ga koristimo za kolege koji odlaze iz firme po slicnom principu).">Free</label> <input type="text" value="0" name="free"> </div> <div class="col-3 col-lg-1"> <label for="holidays" data-toggle="tooltip" data-placement="top" title="Holiday - vreme / dani koji se oduzimaju od fonda godisnjeg odmora">Holidays</label> <input type="text" value="0" name="holidays"> <i class="info-modal-trigger ti-more-alt position-absolute" data-toggle="modal" data-target="#holidays"></i> </div> <div class="col-3 col-lg-1"> <label for="sickness" data-toggle="tooltip" data-placement="top" title="Sickness - bolovanja">Sickness</label> <input type="text" value="0" name="sickness"> </div> <div class="col-3 col-lg-1"> <label for="daysOff" data-toggle="tooltip" data-placement="top" title="Days off - slobodni dani na ime zakonskog prava (slava, vencanje, rodjenje deteta,...)">Days Off</label> <input type="text" value="0" name="daysOff"> </div> <div class="col-3 col-lg-1"> <label for="total">Total</label> <input type="text" value="0" name="total" readonly> </div> </div> <div class="row"> <div class="col-3 col-lg-2 align-self-end"> <div class="d-flex align-items-center vct-team-location"> <p class="w-100 text-center">On-site</p> </div> </div> <div class="col-3 col-lg-1"> <label for="normal" data-toggle="tooltip" data-placement="top" title="Normal - vreme provedeno na komercijalnim projektima">Normal</label> <input type="text" value="0" name="normal"> </div> <div class="col-3 col-lg-1"> <label for="travel" data-toggle="tooltip" data-placement="top" title="Travel - vreme provedeno u putu prilikom odlaska kod klijenta">Travel</label> <input type="text" value="0" name="travel"> </div> <div class="col-3 col-lg-1"> <label for="totalWork">Total work</label> <input type="text" value="0" name="totalWork"> </div> <div class="col-3 col-lg-1"> <label for="overtime" data-toggle="tooltip" data-placement="top" title="Overtime - rad na projektima radnim danima posle 19h i vikendima!">Overtime</label> <input type="text" value="0" name="overtime"> </div> <div class="col-3 col-lg-1"> <label for="eiInternal" data-toggle="tooltip" data-placement="top" title="Ei Internal - rad na internim projektima ili overhead koji je nastao usled administrativnih obaveza (razni sastanci, godisnji razgovori, itd.)">Ei internal</label> <input type="text" value="0" name="eiInternal"> </div> <div class="col-3 col-lg-1"> <label for="free" data-toggle="tooltip" data-placement="top" title="Free - fond sati koji dopunjuje ukupne mesecne sate - koristimo ga za nove kolege koji dodju u sred meseca pa time dopunimo vreme (npr. ako je neko dosao 15-og u mesecu posle 10 radnih dana u Free ce biti upisano 80h), takodje ga koristimo za kolege koji odlaze iz firme po slicnom principu).">Free</label> <input type="text" value="0" name="free"> </div> <div class="col-3 col-lg-1"> <label for="holidays" data-toggle="tooltip" data-placement="top" title="Holiday - vreme / dani koji se oduzimaju od fonda godisnjeg odmora">Holidays</label> <input type="text" value="0" name="holidays"> </div> <div class="col-3 col-lg-1"> <label for="sickness" data-toggle="tooltip" data-placement="top" title="Sickness - bolovanja">Sickness</label> <input type="text" value="0" name="sickness"> </div> <div class="col-3 col-lg-1"> <label for="daysOff" data-toggle="tooltip" data-placement="top" title="Days off - slobodni dani na ime zakonskog prava (slava, vencanje, rodjenje deteta,...)">Days Off</label> <input type="text" value="0" name="daysOff"> </div> <div class="col-3 col-lg-1"> <label for="total">Total</label> <input type="text" value="0" name="total" readonly> </div> </div> </div> <div class="col-3 col-lg-1"> <label for="deviation" data-toggle="tooltip" data-placement="top" title="Odsutupanje od potrebnog vremena">Deviation</label> <input class="deviation" type="number" value="0" name="deviation" readonly> </div> </div> <div class="row align-items-end mb-3"> <div class="col-12 col-md-7"> <label for="notes">Notes</label> <textarea name="notes" rows="3"></textarea> </div> <div class="col-12 col-md-5 mt-2 text-left text-md-right"> <button type="button" class="btn btn-highlight px-4">Save</button> </div> </div> </div>';

        $(document).on('click','.add-team-member',function(){ 
            $('.team-members').append(teamMember);
        });
        $(document).on('click','.remove-team-member',function(){
                $(this).closest($('.vct-team-member-block')).slideUp(200);
            setTimeout(function () {
            $(this).closest($('.vct-team-member-block')).remove();
        }, 150);
        });


    //add member autocomplete
    var options = {
        url: "/employees.json",
        getValue: "name",
        list: {
            match: {
                enabled: true
            }
        }
    };
    $('#employees').easyAutocomplete(options);

    //nice select ini
        $('select').niceSelect();
});

