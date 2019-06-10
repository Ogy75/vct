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
        trigger.toggleClass('button-highlight');
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
        if ($(window).scrollTop() > 150) {
            $('.vct-top-nav, .vct-left-nav-toggle').addClass('nav-up');
        }
        if ($(window).scrollTop() < 151) {
            $('.vct-top-nav, .vct-left-nav-toggle').removeClass('nav-up');
            $('.vct-top-nav, .vct-left-nav-toggle').addClass('nav-down');
        }
    });

    //total toggle
    var card = $('.vct-total-toggle-card a');
    var totalPanel = $('.vct-total-toggle-wrapper');
    var totalPanelHeight = totalPanel.height();

    card.on('click', function(){
        totalPanel.slideToggle(100);
        card.find('i').toggleClass('ti-angle-up');
    });

    //tooltip ini
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });

    //notification badge demo
      setTimeout(function(){
        $('.vct-notification').show().delay(5000).queue(function(n) {
            $(this).hide(); n();
          });
      }, 1500);

      

    //back btn
    $('.vct-back').on('click', function(){
        window.history.back();
    });
});


