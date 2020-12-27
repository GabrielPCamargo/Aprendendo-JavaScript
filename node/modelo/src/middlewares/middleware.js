exports.middlewareGlobal = (req, res, next) => {
    res.locals.variacvelLocal = 'variavel local texto';
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.send('BAND CSRF.');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}