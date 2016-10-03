var submitBtn = document.querySelector('.right.labeled.submit.button');

submitBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
  this.classList.add('loading');
  var _this = this;
  setTimeout(function () {
  	_this.classList.remove('loading');
    alert('Solicitud de registro exitosa');
  }, 3000);

});

// Hammer Library
var body = $('body')[0];

Hammer(body).on("swiperight", function() {
  $('.ui.sidebar').sidebar('show');
});

Hammer(body).on("swipeleft", function() {
  $('.ui.sidebar').sidebar('hide');
});