const soluce = document.getElementById('solution');
const counter = document.querySelector('.counter');

const styles = window.getComputedStyle(counter, '::after');
const content = styles.content;

content == "100%";

if(content == "100%") {
    soluce.style.visibility = "visible";
}

console.log(content);