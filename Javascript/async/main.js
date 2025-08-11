function promise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, delay);
    })
}
async function print() {
    try {
        const res = await promise(1000)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
print()
console.log('first')

async function print1() {
    let sum = 0
    for (let i = 0; i < 100000000; i++) {
        if (sum > 1000000) {
            sum = 0
        } else {
            sum += i

        }
    }
    // console.log(sum)
}
print1()
console.log('my success')