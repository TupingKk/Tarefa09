function dolar(valorEmDolares) {
    return valorEmDolares * 5.59;
}

function calcularDolar1() {
    const valorEmDolares = parseFloat(document.getElementById("dolar1").value);
    const resultado = dolar(valorEmDolares);
    document.getElementById("resultado1").value = resultado.toFixed(2);
}

function dolar2(valorEmDolares, taxa) {
    return valorEmDolares * taxa;
}

function calcularDolar2() {
    const valorEmDolares = parseFloat(document.getElementById("dolar2").value);
    const taxa = parseFloat(document.getElementById("taxa2").value);
    const resultado = dolar2(valorEmDolares, taxa);
    document.getElementById("resultado2").value = resultado.toFixed(2);
}

function conversao(valor, taxa, tipo) {
    if (tipo === "dolar") {
        return valor * taxa;
    } else if (tipo === "real") {
        return valor / taxa;
    } else {
        return "Tipo inválido";
    }
}

function calcularConversao() {
    const valor = parseFloat(document.getElementById("valor3").value);
    const taxa = parseFloat(document.getElementById("taxa3").value);
    const tipo = document.getElementById("tipo3").value;
    const resultado = conversao(valor, taxa, tipo);
    document.getElementById("resultado3").value = resultado.toFixed(2);
}
