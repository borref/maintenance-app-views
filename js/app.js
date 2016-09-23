FastClick.attach(document.body);

$('.ui.sidebar')
  .sidebar({
  	transition: 'overlay',
  	mobileTransition: 'overlay'
  })
  .sidebar('attach events', '.navigation.button', 'show');

$('.ui.dropdown').dropdown();

$('.ui.checkbox').checkbox();