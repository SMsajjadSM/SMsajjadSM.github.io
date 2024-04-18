function myMenuFunction(){
    const menuBtn = document.querySelector('#myNavMenu')
    menuBtn.classList.toggle("responsive")
}



// dark mode 



const body = document.querySelector('body')
toogleSwitch = document.querySelector('#toggle-switch')
console.log(toogleSwitch);
toogleSwitch.addEventListener('click', () => {
    body.classList.toggle("dark")
})



// typing effect 



const typingEffect = new Typed(".typedText",{
    strings:["Designer","Coder","Developer"],
    loop:true,
    typeSpeed : 100,
    backSpeed: 80 ,
    backDelay: 2000

})



// scroll animation 

const sr = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:"2000",
    reset:true
})
sr.reveal( ".featured-name",{delay:100} );
sr.reveal( ".text-info",{delay:200} );
sr.reveal( ".text-btn",{delay:200} );
sr.reveal( ".socical-icons",{delay:200} );
sr.reveal( ".featured-image",{delay:320} );
sr.reveal( ".project-box",{interval:320} );
sr.reveal( ".top-header",{} );

const srLeft =ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:"2000",
    reset:true
})

srLeft.reveal( ".about-info",{delay:100} );
srLeft.reveal( ".contact-info",{delay:100} );

const srRight =ScrollReveal({
    origin:"right",
    distance:"80px",
    duration:"2000",
    reset:true
})
srRight.reveal( ".skill",{delay:100} );
srRight.reveal( ".skill-box",{delay:100} );




// active link 



const section = document.querySelectorAll("section[id]")

console.log(section);
function scrollActive(){
    const scrollY = window.scrollY
    section.forEach(current =>{ 
        const sectionHeight=current.offsetHeight
        const sectionId = current.getAttribute("id")
        console.log(sectionId);
        const sectionTop = current.offsetTop - 50
        console.log(sectionHeight,sectionTop,sectionId);
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".nav-menu a[href*="+sectionId +"]").classList.add("active-link")
    }else{
        document.querySelector(".nav-menu a[href*="+sectionId +"]").classList.remove("active-link")
    }
    })
}
window.addEventListener("scroll",scrollActive)