var arrayNumbers = [];

function lerInput(){

    var numero = document.getElementById("numbersId").value;

    arrayNumbers.push(parseInt(numero));
    document.getElementById("NumAdd").innerText = arrayNumbers.toString();

}

function calcularNumero(){
if(arrayNumbers.length >= 5) {
    var maior = Math.max.apply(Math, arrayNumbers);
    alert(maior);
} else {

    alert("É necessario inserir 5 digitos");
}
}
