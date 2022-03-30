const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async (req, res) => {
    const login = new Login(req.body);
    await login.register();

    if(login.errors.length > 0) {
        req.flash('errorsList', login.errors);
        req.session.save(function() {
            return res.redirect('/login/index');
        })
        return;
    }

    req.flash('success', 'Seu usuário foi criado com sucesso!');
    req.session.save(function() {
        return res.redirect('/login/index');
    })
}

exports.login = async (req, res) => {
    const login = new Login(req.body);
    await login.login();

    if(login.errors.length > 0) {
        req.flash('errorsList', login.errors);
        req.session.save(function() {
            return res.redirect('/login/index');
        })
        return;
    }

    req.flash('success', 'Logado com sucesso!');
    req.session.user = login.user;
    req.session.save(function() {
        return res.redirect('/');
    })
}

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/login/index');
}