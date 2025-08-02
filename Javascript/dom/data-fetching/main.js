function userShow() {
    const userDiv = document.getElementById('users')
function getUsers(url) {
    return fetch('https://jsonplaceholder.typicode.com/users')
}
getUsers()
    .then(res => res.json())
    .then(data => {
        const ul = document.createElement('ul')
        for (const user of data) {
            const li = document.createElement('li')
            li.innerText = user.name
            ul.appendChild(li)
        }
        userDiv.appendChild(ul)
    })
}
userShow()