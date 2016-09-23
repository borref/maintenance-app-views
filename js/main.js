var submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', function () {
  this.classList.add('loading');
  var _this = this;
  setTimeout(function () {
    alert('Successful login');
    _this.classList.remove('loading');
  }, 3000);

});
