const param = new URLSearchParams(document.location.search);
const solution = param.get('solution');

const soluce = "hacker";

if(solution == soluce || soluce.toLowerCase() == solution) {
    window.location.href = 'index4.html';
}