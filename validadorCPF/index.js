function cpfIsValid(cpf){

    let cpfLimpo = cpf.replace(/\D+/g, '');
   
    let cpfArray = Array.from(cpfLimpo);
    let cpfArrayLimpo = [...cpfArray];


    cpfArray.splice(-2, 2);


    for(let i = 0; i <= 1; i++){
        let multiplicador = 10 + i;

        let teste = cpfArray.reduce( (ac, valor) => {
            ac += Number(valor) * multiplicador;
            multiplicador--; 

            return ac;
        }, 0);   
        
        let digito = String(11 - (teste % 11));
        
        let verificador = digio > 9 ? 0 : digito;

        cpfArray.push(verificador);
    }

    
    let intersecao = cpfArrayLimpo.filter((x,i) => cpfArray[i] == x);

    return intersecao.length === 11 ? true : false;
    
}


let cpf = '469.986.830-00';
console.log(cpfIsValid(cpf));