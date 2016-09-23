// Initializing DOM objets

$('.ui.sidebar')
  .sidebar({
  	transition: 'overlay',
  	mobileTransition: 'overlay',
  	scrollLock: true
  })
  .sidebar('attach events', '.navigation.button', 'show');

$('.ui.dropdown').dropdown();

$('.ui.checkbox').checkbox();
