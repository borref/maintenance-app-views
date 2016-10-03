var $tabButtons = $('.tab-buttons .button');

$tabButtons.on('click', function (evt) {
	evt.preventDefault();
	$tabButtons.removeClass('active');
	$(this).addClass('active');
});

// Hammer Library
var body = $('body')[0];

Hammer(body).on("swiperight", function() {
  $('.ui.sidebar').sidebar('show');
});

Hammer(body).on("swipeleft", function() {
  $('.ui.sidebar').sidebar('hide');
});