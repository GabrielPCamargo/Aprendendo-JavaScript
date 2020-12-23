const nome = 'gabriel';
const sobrenome = 'miranda';

const falaNome = () => {
    console.log(nome, sobrenome);
};

// module.exports.nome = nome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';


module.exports = {
    nome, falaNome, sobrenome
}

//exporta uma função unica e ja importa direto,
module.exports = () => console.log('oiii');