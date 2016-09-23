var submitBtn = document.getElementById('submit-button');
submitBtn.addEventListener('click', function () {
  this.classList.add('loading');
  var _this = this;
  setTimeout(function () {
    _this.classList.remove('loading');
    window.location.href = "home.html"
  }, 1750);

});
