const mouseHover = Array.from(document.getElementsByClassName('dp1'));
const header = document.getElementById('header');
const overlap = document.getElementById('overlap');

function alpha() {}

function beta() {}

mouseHover.forEach((header) => header.addEventListener('mouseover', alpha));
overlap.addEventListener('mouseleave', beta);
