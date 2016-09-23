var $tabButtons = $('.tab-buttons .button');

$tabButtons.on('click', function (evt) {
	evt.preventDefault();
	$tabButtons.removeClass('active');
	$(this).addClass('active');
});