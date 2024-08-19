function verficaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>' 
        return
    }

    if (numeroForMaiorOuMenorQueoPermitido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido: o úmero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>'
       
    }
    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Vovê acertou!!</h2>
            <h3>O número secreto ra ${"numeroSecreto"}</h3>

        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-regular fa-arrow-down-long"></i></div>
        `
    }

    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-regular fa-up-down-long"></i></div>
        `

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueoPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}