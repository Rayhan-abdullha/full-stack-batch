function inchToFeet(inch) {
    const feet = inch / 12
    const feetNumber = parseInt(feet)
    const remaing = inch % 12
    return feetNumber + ' feet ' + remaing + ' Inch.'
}
const res = inchToFeet(74)
console.log(res)