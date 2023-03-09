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
//document.addEventListener("load")

function calc() {
    
    const n4 = document.getElementById("num4")
    const n5 = document.getElementById("num5")
    const n6 = document.getElementById("num6")

    const val1 = Number(n4.value)
    const val2 = Number(n5.value)
    const val3 = Number(n6.value)

    total = val1 + val2 + val3

     const resultadoDois = document.getElementById("resultadoDois")
    console.log (resultadoDois.innerHTML = `Total da soma: ${total}`)

}
function somar_ex() {
    // PEGANDO OS VALORES DOS INPUTS
    let total = 0
    const valor1 = document.getElementById("val1")
    const valor2 = document.getElementById("val2")
    const valor3 = document.getElementById("val3")

    // PASSANDO PARA NUMERO - TENDO CERTEZA QUE SÃO NUMEROS E NÃO TEXTO PARA CONCATENAR
    const value1 = Number(valor1.value)
    const value2 = Number(valor2.value)
    const value3 = Number(valor3.value)

    // PROCESSAMENTO - CALCULO
    total = value1 + value2 + value3
    const resultado = document.getElementById("total_ex")
    resultado.innerText = "Total da Soma: " + total
}