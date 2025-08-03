// const btn = document.querySelector('button')
// btn.onclick = function () {
//     document.body.style.backgroundColor ='gray'
// }
// document.getElementById('white').addEventListener('click', function () {
//     document.body.style.backgroundColor ='white'
//     console.log('white')
// })

// add todo
document.getElementById("todo-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = document.getElementById("todo-input");
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  li.innerText = inputValue.value;
  ul.appendChild(li);
  inputValue.value = "";
});
