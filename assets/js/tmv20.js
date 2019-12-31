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
        timeModule.removeClass('selected');
        timeModule.find(moduleStatus).removeClass('active');
        $(this).addClass('selected');
        $(this).find(moduleStatus).addClass('active');
        event.preventDefault();
    });


$('#days-spent').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-spent-data').show();
});

$('#days-previous').click(function () {
    var timeModule = $('.time-module');
    var panelContainer = $('.panel-container');
    panelContainer.hide();
    $(this).parents('.left-items').find('#days-previous-data').show();
});