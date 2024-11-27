gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60
})
gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60
})
gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60
})
gsap.from("#main h1",{
    delay:0.4,
    opacity:0,
    duration:1,
})
gsap.from(["#page2 h5", "#page h1", "#page2 #about-us"],{
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#page2 h5",
        scroller:"body",
        start:"top 80%",
        // markers:true 
    }
})
// Animate images in #page3
gsap.from("#page3 #images #img4", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page3 #images #img4",
        scroller: "body",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

gsap.from("#page3 #images #img5", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page3 #images #img5",
        scroller: "body",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});


gsap.from("#page3 #text h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page3 #text h2",
        scroller: "body",
        start: "top 85%",
        toggleActions: "play none none reverse",
    }
});

gsap.from("#page3 #text p", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#page3 #text p",
        scroller: "body",
        start: "top 80%",
        toggleActions: "play none none reverse",
    }
});

// gsap.from("#learn-about", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: "#learn-about",
//         scroller: "body",
//         start: "top 75%",
//         toggleActions: "play none none reverse",
//     }
// });
