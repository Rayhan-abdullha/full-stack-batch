// const obj = {
//     name: 'coder',
//     print() {
//         console.log(this.name)
//     }
// }

// obj.print()

// const map: Map<string, unknown> = new Map()
// map.set('name', 'rayhan')
// map.set('obj', {name: 'coder'})
// console.log(map.get('obj'))

// const set: Set<number | string> = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// set.forEach(v => console.log(v))


class HashTable {
    private data: unknown[]
    constructor(size: number) {
        this.data = new Array(size)
    }
  
   hash(key: string) {
       let hash = 0
       for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
       }
       console.log(hash)
    }
}


const hashTable = new HashTable(50)
hashTable.hash('fadddff')
// hashTable.hash('kabir3')