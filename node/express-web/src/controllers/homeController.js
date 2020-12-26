exports.inicial = (req, res) => {
    res.render('index');
}

exports.inicialPost = (req, res) => {
    res.send(`
    <h1>Post foi enviado com sucesso!</h1>
    Mensagem enviada: ${req.body.teste}`
    );
}