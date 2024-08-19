
const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();
recognition.addEventListner('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].trascript
    exibeChuteNaTela(chute)
    verficaSeOChutePossuiUmValorValido (chute)
}

function exibeChuteNaTela (chute) {
    elementoChute.innerHTML = `
        <div> Você disse</div>
        <spna class="box">${chute}</span>
    `

}

recognition.addEventListner('end', () => recognition.start())