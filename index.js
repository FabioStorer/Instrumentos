let resposta

console.log('Você toca algum instrumento?');

process.stdin.on('data', function (data){
    resposta = data.toString().trim();

    if (resposta == 'Sim' || resposta == 'sim' || resposta == 's') {
        console.log('Que legal.');
    } else if (resposta == 'Não' || resposta == 'nao' || resposta == 'n') {
        console.log('Que pena. Tocar um instrumento é muito legal.');
    } else {
        console.log('Não entendi. Pode repetir?');
    }
    process.exit();
})

