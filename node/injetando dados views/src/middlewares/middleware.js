module.exports = (req, res, next) => {
    res.locals.variacvelLocal = 'variavel local texto';
    next();
}