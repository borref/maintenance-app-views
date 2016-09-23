var submitBtn = document.querySelector('.right.labeled.submit.button');

submitBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
  this.classList.add('loading');
  var _this = this;
  setTimeout(function () {
  	_this.classList.remove('loading');
    alert('ready pa la party');
  }, 3000);

});
