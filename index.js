let resposta = '';
let instrumento = '';
let entradaUsuario = '';

console.log('Você toca algum instrumento?');

process.stdin.on('data', function (data) {
    entradaUsuario = data.toString().trim();

    if (!resposta) {
        resposta = entradaUsuario;
        if (resposta == 'Sim' || resposta == 'sim' || resposta == 's') {
            console.log('Que legal. Qual instrumento você toca?');
        } else if (resposta == 'Não' || resposta == 'nao' || resposta == 'n') {
            console.log('Que pena. Tocar um instrumento é muito legal.');
            process.exit();
        } else {
            console.log('Não entendi. Pode repetir?');
        }
    } else if (!instrumento) {
        instrumento = data.toString().trim();
        if (instrumento == 'Violao') {
            console.log('Entendi. Tocar um Violão parece complicado mesmo sendo um instrumento simples.');
            instrumento = '';
            process.exit();
        } else if (instrumento == 'Bateria') {
            console.log('Nossa, tocar Bateria me cansa só de pensar.');
            instrumento = '';
            process.exit();
        } else {
            console.log('Nunca ouvi falar desse instrumento.');
            process.exit();
        }
    }
})

