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

$('.js_book').on('click', function() {
    $('.js_bookingMessage').removeClass('d-none');
});

//todays date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;
//document.querySelector('.action-date').innerHTML = today;

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