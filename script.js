let tamanhofonte=20;
function aumentarfonte(){
    tamanhofonte += 2 ;
    document.getElementById('texto').style.fontSize = tamanhofonte + 'px';
}
function diminuirfont(){
    if(tamanhofonte > 14){
    tamanhofonte -= 2 ;
    document.getElementById('texto').style.fontSize = tamanhofonte + 'px';
}
}

function ativarcontraste(){
    document.body.classList.toggle('conrtaste');
}