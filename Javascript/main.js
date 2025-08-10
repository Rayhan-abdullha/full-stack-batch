const printName = (name, cb) => {
    cb(name)
}

printName('abir', function (name) {
    console.log(name)
})
