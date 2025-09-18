$(function() {
    gsap.registerPlugin(ScrollTrigger);

    // 01. section 페이지 고정정 스크롤
    gsap.utils.toArray('.pin-section').forEach((section, i)=> {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            // markers: true
        })
    })

    //02. section01 스크롤 효과
    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.section01 .text',
            start: '50% 50%',
            end: 'bottom top',
            //markers: true,
            scrub: 0.5,
        }
    }).to('.section01 .text', {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        x: -100,
    })

    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.section01 .image',
            start: '25% 20%',
            end: 'bottom 50%',
            //markers: true,
            scrub: 1,
        }
    }).to('.section01 .image img:last-child', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        x: 100,
    }).to('.section01 .image img:first-child', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        x: 100,
    })


    const header = document.querySelector('header');
    const whiteSections = ['.section02', '.section03', '.section04'];
    
    // 각 하얀 배경 section에 대해 ScrollTrigger 생성
    whiteSections.forEach(sectionClass => {
        // 03. header 로고 가시성 제어 (하얀 배경 section에서 bk 클래스 추가)
        ScrollTrigger.create({
            trigger: sectionClass,
            start: 'top 120px', // header 높이만큼 여유를 둠
            end: 'bottom 120px',
            onEnter: () => {
                header.classList.add('bk');
            },
            onLeave: () => {
                header.classList.remove('bk');
            },
            onEnterBack: () => {
                header.classList.add('bk');
            },
            onLeaveBack: () => {
                header.classList.remove('bk');
            }
        });
    });

    //03. section02 스크롤 효과
    timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.section02 .text',
            start: '50% 50%',
            end: 'bottom top',
            //markers: true,
            scrub: 0.5,
        }
    }).to('.section02 .text', {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        x: -100,
    })
})