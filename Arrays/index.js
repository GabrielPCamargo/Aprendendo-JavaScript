const arrayInicial = [0, 5, 6, 7, 10, 50, 20, 2, 3];

const arrayFiltrado = arrayInicial.filter(valor => valor >= 10);  //(valor, indíce, array)
const arrayMapeado = arrayInicial.map(valor => valor * 2);        //(valor, indíce, array)
const arrayReduzido = arrayInicial.reduce((ac, valor) => {        //(acumulador, valor, indíce, array)
    if(valor % 2 === 0) return ac + valor;
    return ac;
}, 0);

console.log(arrayFiltrado, arrayMapeado, arrayReduzido);


arrayFiltrado.forEach((valor, indice, array) => {               //(valor, indíce, array)
    console.log(valor, indice, array);
})