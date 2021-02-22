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
        start: "-=200",
        end: "+=300",
    },
    xPercent: -50,
    opacity: 0,
});

gsap.from(".boxes > .light", {
    scrollTrigger: {
        trigger: "#vision",
        scrub: 1,
        start: "-=300",
        end: "+=300",
    },
    xPercent: +50,
    opacity: 0,
});

gsap.from("#contact", {
    scrollTrigger: {
        trigger: "#contact",
        scrub: 1,
        start: "-=200",
    },
    duration: 1,
    ease: "elastic",
    opacity: 0,
    force3D: true
});