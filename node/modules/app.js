const mod1 = require('./mod1') //Recebe o objeto exportado
const falaNome = require('./mod1').falaNome //recebe o falaNome direto
const axios = require('axios') //Node modules só precisa do nome, não do diretório

console.log(mod1.falaNome);

const {nome, falaNome} = require('./mod1');