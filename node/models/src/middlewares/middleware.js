module.exports = (req, res, next) => {
    console.log('Passei pelo middleware');
    next();
}