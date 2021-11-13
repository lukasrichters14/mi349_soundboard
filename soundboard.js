// Audio tags
let laserAudio = document.getElementById('laser-audio');
let modemAudio = document.getElementById('modem-audio');
let neonAudio = document.getElementById('neon-audio');

// Buttons
let laserButton = document.getElementById('laser-button');
let modemButton = document.getElementById('modem-button');
let neonButton = document.getElementById('neon-button');

// Listeners
laserButton.addEventListener('click', function () {
    laserAudio.play();
});

laserButton.addEventListener('mouseenter', function () {
    laserAudio.play();
});

modemButton.addEventListener('click', function () {
    modemAudio.play();
});

modemButton.addEventListener('mouseenter', function () {
    modemAudio.play();
});

neonButton.addEventListener('click', function () {
    neonAudio.play();
});

neonButton.addEventListener('mouseenter', function () {
    neonAudio.play();
});