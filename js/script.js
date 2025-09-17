$(function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.pin-section').forEach((section, i)=> {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            // markers: true
        })
    })

    ScrollTrigger.create({
        snap: 1 / (section.length - 1)
    })
})