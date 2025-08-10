function closure() {
    let balance = 0
    return () => {
        return balance++
    }
}
const c = closure()
c()
c()
c()
console.log(c())