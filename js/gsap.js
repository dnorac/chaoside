gsap.from(".hero", {
    delay: 1,
    duration: 2,
    ease: 'elastic',
    yPercent: 10,
    opacity: 0
})

gsap.to('#cursor', {
    scrollTrigger: {
        trigger: '.main-content',
        start: 'top top',
        end: '+=100',
        scrub: 1,
    },
    duration: 2,
    opacity: 0,
    yPercent: 50
})

gsap.from("#vision h2", {
    scrollTrigger: {
        trigger: "#vision",
        scrub: .5,
        start: '-=500',
        end: '+=300'
    },
    yPercent: -50,
    stagger: 0.2,
    opacity: 0,
})

gsap.from(".boxes > .dark", {
    scrollTrigger: {
        trigger: "#vision",
        scrub: 1,
        start: "-=400",
        end: "0",
    },
    ease: "linear",
    xPercent: -50,
    opacity: 0,
});

gsap.from(".boxes > .light", {
    scrollTrigger: {
        trigger: "#vision",
        scrub: 1,
        start: "-=400",
        end: "0",
    },
    xPercent: +50,
    opacity: 0,
});

gsap.from("#contact", {
    scrollTrigger: {
        trigger: "#contact",
        scrub: 1,
        start: "-=400",
        end: "+=200"
    },
    opacity: 0
});