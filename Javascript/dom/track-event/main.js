const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        const c = parseInt(button.dataset.click) || 0
       button.dataset.click = c + 1
    })
}) 