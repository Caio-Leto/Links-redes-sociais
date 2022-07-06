const bodyPink = document.querySelector('body.dark-blue')
const btn = document.querySelector('button')

btn.addEventListener("click", () => {
    if (bodyPink.classList.contains('dark-blue')) {
        bodyPink.classList.remove('dark-blue')
        bodyPink.classList.add('pink')
        btn.textContent = 'Theme Blue'
    } else {
        bodyPink.classList.remove('pink')
        bodyPink.classList.add('dark-blue')
        btn.textContent = 'Theme Pink'
    }
    
})