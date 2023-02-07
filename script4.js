const param = new URLSearchParams(document.location.search);
const solution = param.get('solution');

const soluce = "Cheval de Troie";

if(solution == soluce || soluce.toLowerCase() == solution) {
    window.location.href = 'end/';
}