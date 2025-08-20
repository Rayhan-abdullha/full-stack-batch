
// type Arr = ['rayhan' , 'abir']
// const arr: Arr = ['rayhan', 'abir', ]
// console.log(arr

// )

// const x = [1, 2] as const


function doSomting(man: unknown) {
    if (typeof man == 'string') {
        console.log(man.toUpperCase())
    }
}
// doSomting('Ronaldo')