const counter = document.querySelector('.counter');
const soluce = document.querySelector('.soluce');

counter.addEventListener('animationend', function() {
    soluce.style.visibility = 'visible'
}, false)