const form = document.querySelector('#form');

form.addEventListener('submit', handleSendForm);



function handleSendForm(evento){
    evento.preventDefault();

    const peso = Number(form.querySelector('#peso').value);
    const altura = Number(form.querySelector('#altura').value);

    if(!peso){
        showIMC('Peso Inválido, digite novamente!', false);
        return;
    }

    if(!altura){
        showIMC('Altura Inválida, digite novamente!', false);
        return;
    }

    const imc = (peso / (altura ** 2)).toFixed(2);
    const nivel = getNivel(imc);

    const msg = `Seu IMC é ${imc}, você está ${nivel}`;
    showIMC(msg, true);
}

function showIMC(text, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = "";
    const paragraph = document.createElement('p');
   
    paragraph.innerHTML = text;
    resultado.appendChild(paragraph);

    if(isValid){
        resultado.className = 'resultado-valido';
    }else{
        resultado.className = 'resultado-invalido';
    }
}

function getNivel(imc){
    const estados = [`abaixo do peso`, `no peso ideal`, `com sobrepeso`, `com obesidade grau 1`, `com obesidade grau 2`, `com obesidade grau 3`]

    if(imc <= 18.5) return estados[0];
    else if(imc >= 18.5 && imc <= 24.9) return estados[1];
    else if(imc >= 25 && imc <= 29.9) return estados[2];
    else if(imc >= 30 && imc <= 34.9) return estados[3];
    else if(imc >= 35 && imc <=  39.9)return estados[4];
    else if(imc > 40)return estados[5];
}