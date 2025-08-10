// const boxWrapper = document.getElementById('box-wrapper');
// const boxes = boxWrapper.children; // HTMLCollection
// console.log(boxes)
// console.log(boxes[0]); // Using Index WORKS!
// console.log(boxes.namedItem("id-box1")); // Using ID WORKS!
// console.log(boxes.namedItem("nm-box1")); // Using Name WORKS!
// console.log(boxes.namedItem("cls-box1")); // Using Class NULL


// const title = document.getElementById('heading')
// console.log(title)
// title.style.color = 'red'
// title.setAttribute('title', 'this is title')


// boxWrapper.childNodes[1].style.background = 'red'
// const div = document.createElement('div')
// div.classList.add('demo')
// div.innerText = 'test'
// boxWrapper.appendChild(div)

// console.log(window)
// window.alert("Enter Password")
// const pass = window.prompt("Enter Your Password")
// if (parseInt(pass) === 1234) {
//     console.log('Accessed')
// }


// window.addEventListener('resize', (event) => {
//     console.log(event.target.outerWidth)
//     if (event.target.outerWidth > 1000) {
//         document.body.style.backgroundColor = 'gray'
//     } else {
//         document.body.style.backgroundColor = 'white'
//     }
// })


// create tag
const element = document.createElement('h1')
element.innerText = 'Hello JS'
function style(prop, val) {
    element.style[`${prop}`] = val
}
style('color', 'white')
style('backgroundColor', 'red')
document.body.appendChild(element)
console.log(document.body)