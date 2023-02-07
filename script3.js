for(let i = 0; i < 20;i++) {
    let newblock = document.getElementById('modal').cloneNode(true);
    window.document.body.appendChild(newblock);
    newblock.style.display = 'block';
    newblock.id = 'modal-' + i;
    console.log(newblock.lastChild.attributes.id)
    newblock.lastChild.id = 'modal-' + i + '-close';
    document.getElementById('modal-' + i + '-close').addEventListener('click', function(e) {
        document.getElementById('modal').style.display = 'none'
    })
}