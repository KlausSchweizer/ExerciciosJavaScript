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
    if (n1 > n2) {
        document.getElementById("res6").innerText = "Maior: " + n1;
    } else if (n1 == n2) {
        document.getElementById("res6").innerText = "São iguais";
    } else {
        document.getElementById("res6").innerText = "Maior: " + n2;
    }
}

function tabuada() {
    let numero = Number(document.getElementById("numTabuada").value);
    let mensagem = "";

    if (numero >= 1 && numero <= 10) {
        for (let index = 1; index <= 10; index++) {
            mensagem += numero * index + " ";
        }
    }
    document.getElementById("res7").innerText = mensagem;
}

function contarAte10() {
    let index = 0;
    setInterval(function () {
        document.getElementById("res8").innerText = index;
        if (index < 10) {
            index++;
        } else {
            document.getElementById("res8").innerText = "";
        }
    }, 1000);
}

function tirarMedia() {
    let n1 = Number(document.getElementById("numMedia1").value);
    let n2 = Number(document.getElementById("numMedia2").value);
    let n3 = Number(document.getElementById("numMedia3").value);

    media = (n1 + n2 + n3) / 3;
    document.getElementById("res9").innerText = media >= 6 ? "Aprovado" : "Reprovado";
}

function converterTemperatura() {
    let celsius = Number(document.getElementById("temperatura").value);
    let farenheit = (celsius * 9 / 5) + 32;
    document.getElementById("res10").innerText = farenheit;

}

function verDiaSemana() {
    const diasSemana = [
        "None",
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
    ];

    let numero = document.getElementById("numDia").value;

    let dia;
    if (numero >= 1 && numero <= diasSemana.length) {
        dia = diasSemana[numero];
    } else {
        dia = "Dia inválido";
    }
    document.getElementById("res11").innerText = dia;
}

function senha() {
    let senha = document.getElementById("senha").value;
    document.getElementById("res12").innerText = senha == "1234" ? "Acesso permitido!" : "Senha incorreta";
}

function contarRegressivo() {
    let index = 10;
    setInterval(function () {
        document.getElementById("res13").innerText = index;
        if (index > 1) {
            index--;
        } else {
            document.getElementById("res13").innerText = "";
        }
    }, 1000);
}

