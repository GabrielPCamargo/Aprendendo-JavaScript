const elementos = [
    {tag: 'p', texto:'Frase1'},    
    {tag: 'div', texto:'Frase 2'},    
    {tag: 'footer', texto:'Frase 3'},
    {tag: 'section', texto:'Frase 4'},
]


const section = document.querySelector('.container');

const divElementos = document.createElement('div');

section.appendChild(divElementos);

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];

    htmlElemento = document.createElement(tag);
    htmlElemento.innerHTML = texto;

    divElementos.appendChild(htmlElemento);
}

