const path = require('path');
const fs = require('fs').promises;
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

//const pessoas = [
//    {nome: 'gabriel'},
//    {nome: 'matheus'},
//    {nome: 'irineu'},
//    {nome: 'margareth'},
//]
//
//const json = JSON.stringify(pessoas, '', 2);
//escreve(caminhoArquivo, json);

async function lerArquivos (caminho) {
    const data = await ler(caminho);
    renderizaDados(data);
}

function renderizaDados(data) {
    data = JSON.parse(data);
    data.forEach(pessoa => {
        console.log(pessoa.nome);
    });
}   

lerArquivos(caminhoArquivo);