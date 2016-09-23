var submitBtn = document.querySelector('.right.labeled.submit.button');
submitBtn.addEventListener('click', function () {
  this.classList.add('loading');
  var _this = this;
  setTimeout(function () {
    alert('Solicitud generada');
    _this.classList.remove('loading');
  }, 3000);

});
