function lerInput(){
    var texto = document.getElementById("numero").value;
    if(texto.length == 0){

        alert("Insira um valor!");
    }
    document.getElementById("Text").innerText = texto;
}