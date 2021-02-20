const contact = document.querySelector('#contact-form')

const tl = gsap.timeline({ paused: true, onComplete: () => {
    document.querySelector('#contact > h1').remove()
    document.querySelectorAll("#contact-form > *").forEach(el => el.remove())
    const p = document.createElement('p')
    p.classList.add('sent')
    const text = document.createTextNode("Sent.")
    p.appendChild(text)
    contact.appendChild(p)
} })
tl.to("#contact h1", {
    duration: .5,
    yPercent: -50,
    opacity: 0,
})
tl.to("#contact-form > *", {
    duration: .5,
    stagger: 0.2,
    opacity: 0,
    yPercent: -50,
})

const handleSubmit = function(event) {
    event.preventDefault();
    tl.play()
}

contact.addEventListener('submit', handleSubmit)