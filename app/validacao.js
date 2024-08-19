function verficaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)) {
        
        elementoChute.innerHTML += '<div>valor invalido</div>' 
    }

    if (numeroForMaiorOuMenorQueoPermitido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido: o úmero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>'
       
    }
    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Vovê acertou!!</h2>
            <h3>O número secreto ra ${"numeroSecreto"}</h3>

        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueoPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}