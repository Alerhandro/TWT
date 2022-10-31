function receberTurmaUsuario(){
    var turmaUsuario = document.getElementById("form_turma_usuario").value;
    console.log(turmaUsuario);
    document.getElementById("valor_form_turma_usuario").innerHTML = turmaUsuario;
}
function receberDigite(){

    var Usuario = document.getElementById("form_Digite_Usuario").value;
    console.log(Usuario);
    document.getElementById("valor_form_Digite_Usuario").innerHTML = Usuario;
}
function receberLinha(){

    var Linha = document.getElementById("form_Linha").value;
    console.log(Linha);
    document.getElementById("valor_form_Linha").innerHTML = Linha;
}
function receberColuna(){

    var Coluna = document.getElementById("form_Coluna").value;
    console.log(Coluna);
    document.getElementById("valor_form_Coluna").innerHTML = Coluna;
}