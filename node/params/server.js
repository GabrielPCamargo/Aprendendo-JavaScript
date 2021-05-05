const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))   //Necessário para usar o req.body (parâmetro do post)

app.get('/teste/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/teste?teste=ahdfaldfn', (req, res) => {
    res.send(req.query);
})

app.get('/teste', (req, res) => {
    res.send(`
    <form action="/teste" method="post">
        <input type="text" name="teste">
        <button type="submit">Enviar</button>
    </form>`
)})

app.post('/teste', (req, res) => {
    res.send(req.body);
})

app.listen(3000);