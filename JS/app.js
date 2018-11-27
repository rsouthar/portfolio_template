// javascript for scrollreveal
window.port = ScrollReveal({ reset: false});
port.reveal('.para1', {
  origin: 'bottom',
  distance: '100px',
  duration: 500,
  viewFactor: 0.6,
  delay: 150
});

port.reveal('.para2', {
  origin: 'bottom',
  duration: 500,
  viewFactor: 0.6,
  delay: 200
});

port.reveal('.pics_me', {
  origin: 'bottom',
  duration: 500,
  viewFactor: 0.6,
  delay: 200
});
