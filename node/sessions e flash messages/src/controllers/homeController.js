exports.inicial = (req, res) => {
    console.log(req.session.usuario)
    res.render('index');
    return;
}

exports.inicialPost = (req, res) => {
    res.send(`
    <h1>Post foi enviado com sucesso!</h1>
    Mensagem enviada: ${req.body.teste}`
    );
}