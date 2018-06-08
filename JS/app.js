// javascript for scrollreveal
window.port = ScrollReveal({ reset: false});
port.reveal('.para1', {
  origin: 'right',
  distance: '100px',
  duration: 500,
  viewFactor: 0.6,
  delay: 150
});

port.reveal('.para2', {
  origin: 'left',
  duration: 500,
  viewFactor: 0.6,
  delay: 200
});

port.reveal('.pics_me', {
  origin: 'top',
  duration: 500,
  viewFactor: 0.6,
  delay: 250
});
