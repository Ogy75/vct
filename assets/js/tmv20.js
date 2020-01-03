$('.time-module').on('click', function () {
  $(this).addClass('selected');
  //$('.time-module').hasClass('selected').not($(this)).removeClass('selected');  
});

// $('.time-module').click(function() {
//     $(this).addClass('selected');
//     $(this).parents('.row').siblings().removeClass('selected');
//   });

$('.time-module').click(function(event){
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
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-spent-data').fadeIn();
});

$('#days-previous').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-previous-data').fadeIn();
});

$('#days-free').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-free-data').fadeIn();
});

$('#days-earned').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-earned-data').fadeIn();
});

$('#days-assigned').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-assigned-data').fadeIn();
});

$('#days-available').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-available-data').fadeIn();
});

$('#days-sickleave').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-sickleave-data').fadeIn();
});

$('.js_book').on('click', function(){
    $('.js_bookingMessage').removeClass('d-none');
});