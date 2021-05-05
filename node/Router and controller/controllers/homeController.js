exports.inicial = (req, res) => {
    res.send(`
    <form action="/" method="post">
        <input type="text" name="teste">
        <button type="submit">Enviar</button>
    </form>`
    );
}

exports.inicialPost = (req, res) => {
    res.send(`
    <h1>Post foi enviado com sucesso!</h1>
    Mensagem enviada: ${req.body.teste}`
    );
}