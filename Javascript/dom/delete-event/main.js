const input = document.getElementById('delete-input')
const delBtn = document.getElementById('del-btn')

input.addEventListener('keyup', (e) => {
    const val = e.target.value
    if (val === 'DELETE') {
        delBtn.removeAttribute('disabled')
        delBtn.addEventListener('click', () => {
            input.style.display = 'none'
        delBtn.style.display = 'none'
        })
    } else {
        delBtn.setAttribute('disabled', true)
    }
})
