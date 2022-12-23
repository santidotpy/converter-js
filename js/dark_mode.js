const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: 'white', // default: '#fff'
    backgroundColor: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }


function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
  }

  window.addEventListener('load', addDarkmodeWidget);