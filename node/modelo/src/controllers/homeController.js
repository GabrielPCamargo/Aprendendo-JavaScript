exports.inicial = (req, res) => {
    res.render('index', {
        titulo: 'esse será o titulo',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
}

exports.inicialPost = (req, res) => {
    res.send(`
    <h1>Post foi enviado com sucesso!</h1>
    Mensagem enviada: ${req.body.teste}`
    );
}