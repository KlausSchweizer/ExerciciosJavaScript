function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("res1").innerText = "Resultado: " + (n1 + n2);
}

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);
    document.getElementById("res2").innerText = (idade >= 18 ? "Maior de idade" : "Menor de idade"); 
}

function contarCaracteres() {
    let texto = document.getElementById("textoParaConverter").value;
    let numeroChar = texto.length;
    document.getElementById("res3").innerText = "Caracteres: " + numeroChar;   
}

function verificarParidade() {
    let numero = Number(document.getElementById("numeroParidade").value);
    document.getElementById("res4").innerText = (numero % 2 == 0 ? "Par" : "Ímpar");
}


function converterCaixaAlta() {
    let texto = document.getElementById("textoParaUpper").value;
    document.getElementById("res5").innerText = texto.toUpperCase();   
}

function verificarMaior() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    if(n1 > n2) {
        document.getElementById("res6").innerText = "Maior: " + n1;
    } else if (n1 == n2) {
        document.getElementById("res6").innerText = "São iguais";
    } else {
        document.getElementById("res6").innerText = "Maior: " + n2;
    }
}
