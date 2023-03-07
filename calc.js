//entrada
function calcular() {
    const n1 = document.getElementById("num1").value
    const n2 = document.getElementById("num2").value
    const n3 = document.getElementById("num3").value
//processamento
    let resultado = Number(n1) + Number(n2) + Number(n3)
    // console.log(resultado)
    //alert(resultado)
//saída
    document.getElementById("resultado").innerHTML = resultado
}
