exports.middlewareGlobal = (req, res, next) => {
    res.locals.variacvelLocal = 'variavel local texto';
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}