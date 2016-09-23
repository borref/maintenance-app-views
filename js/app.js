// Initializing DOM objets
FastClick.attach(document.body);

$('.ui.sidebar')
  .sidebar({
  	transition: 'overlay',
  	mobileTransition: 'overlay',
  	scrollLock: true
  })
  .sidebar('attach events', '.navigation.button', 'show');

$('.ui.dropdown').dropdown();

$('.ui.checkbox').checkbox();
