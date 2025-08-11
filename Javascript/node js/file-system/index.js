const fs = require('fs')
const path = require('path')

const dataFolder = path.join(__dirname, "data")

/// sync fs //////////////////

// if (!fs.existsSync(dataFolder)) {
//     fs.mkdirSync(dataFolder);
//     console.log("Data Folder is Created")
// }
// const filPath = path.join(dataFolder, 'example.txt')
// fs.writeFileSync(filPath, 'hello file path')

// const filePathTxt = fs.readFileSync(filPath, 'utf-8')
// // console.log(filePathTxt)

// fs.appendFileSync(filPath, '\nNew line')
// const filePathTxt1 = fs.readFileSync(filPath, 'utf-8')
// console.log(filePathTxt1)

// fs.appendFileSync(filPath, '\nNew line again')
// const filePathTxt3 = fs.readFileSync(filPath, 'utf-8')
// console.log(filePathTxt3)

// async way create file
const asyncFilePath = path.join(dataFolder, 'async-example.txt')
if (!fs.existsSync(dataFolder)) {
    fs.mkdir(dataFolder, (err) => {
        err && console.log('error')
        console.log('folder is created')
    })
}
fs.writeFile(asyncFilePath, 'hello js', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('created and wroten')
        fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
            err && console.log('error')
            console.log(data)
            fs.appendFile(asyncFilePath, '\nNew line added', (err) => {
                err && console.log(err)
                fs.readFile(asyncFilePath, 'utf-8', (e, data) => {
                    e && console.log('err')
                    console.log(data)
                })
            })
        })
    }
})