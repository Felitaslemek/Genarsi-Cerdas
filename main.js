/*======================= SHOW MENU ======================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//buat munculin menu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//buat close menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*================ REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // kalo di klik salah satu opsinya, menunya ilang
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===================== SHADOW HEADER ====================*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //kalo di scrol ada bayangan di headernya anjayyy//
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*===================== EMAIL JS =========================*/
const contactForm = document.getElementById('contact-form')
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - TemplateID - #form - publicKey
    emailjs.sendForm('service_x4kz1m4','template_nw02vto','#contact-form','U6sNlbkXPRpNND6Jm')
    .then(() =>{
        // munculin pesan
        contactMessage.textContent = 'Message sent succesfully'

        // ngapus pesab abis 5 detik
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // ngapus semua
        contactForm.reset()
    }, () =>{
        // pesannya eror
        contactMessage.textContent = 'Message not sent (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=================== SHOW SCROLL UP ======================*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // kalo scrollnya dah ketinggian bakal muncul anu ne
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*============= SCROLL SECTION ACTIVE LINK ================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
        }else{
        sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



