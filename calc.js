//entrada
function calcular() {
    const n1 = document.getElementById("num1").value
    const n2 = document.getElementById("num2").value
    const n3 = document.getElementById("num3").value
    //processamento
    let resultado = Number(n1) + Number(n2) + Number(n3)
    //saída
    document.getElementById("resultado").innerHTML = resultado
}

function calc() {
    //capturando no html, mudando typo de dado e selecionando o atributo valor
    const n4 =  Number (document.getElementById("num4").value)
    const n5 = Number (document.getElementById("num5").value)
    const n6 = Number (document.getElementById("num6").value)
    
    //process.
   let total = n4 + n5 + n6
    //
    const resultadoDois = document.getElementById("resultadoDois")
    console.log(resultadoDois.innerHTML = `Total da soma: ${total}`)

}
