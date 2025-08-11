const form = document.querySelector('[data-form]')
form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e.currentTarget)
})