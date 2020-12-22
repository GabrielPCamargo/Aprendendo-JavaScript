fetch('pagima1.html')
    .then(response => {
        if(response.status != 200) throw new Error('Erro na requisição');
        return response.text();
    })
    .then(html => console.log(html))
    .catch(e => console.log(e));

async function request(url){
    try{
        const response = await fetch(url)
        if(response.status != 200) throw new Error('Erro na requisição');
        const html = await response.text();
    }catch(e){
        console.log(e);
    }
}