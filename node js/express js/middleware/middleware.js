const middleWare = (req, res, next) => {
    console.log('this is middleware')
    next()
}
module.exports = middleWare

