const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
const geraMaisculula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 57));
const simbolos = '@#$%&*?/+=§'
const geraSimbolo = () => simbolos[rand(0, 12)];

export default function geraSenha(qtd, maiuscula, minuscula, numero, simbolo){
    let senhaGerada = []

    for(let i = 0; i < qtd; i++){
        maiuscula && senhaGerada.push(geraMaisculula());
        minuscula && senhaGerada.push(geraMinuscula());
        numero && senhaGerada.push(geraNumero());
        simbolo && senhaGerada.push(geraSimbolo());
    }

    return senhaGerada.join('').slice(0, qtd);
}

