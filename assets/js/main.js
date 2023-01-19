var nome = prompt("Qual seu nome?");  
alert('Seja bem-vindo ' +nome ); 

/*MENU SHOW*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*REMOVER MENU MOBILE*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL INICIO*/
sr.reveal('.inicio__title', {})
sr.reveal('.inicio__scroll', {delay: 200})
sr.reveal('.inicio__img', {origin:'right', delay: 400})

/*SCROLL SOBRE MIM*/
sr.reveal('.sobre mim__img', {delay: 500})
sr.reveal('.sobre mim__subtitle', {delay: 300})
sr.reveal('.sobre mim__profession', {delay: 400})
sr.reveal('.sobre mim__text', {delay: 500})
sr.reveal('.sobre mim__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.habilidades__subtitle', {})
sr.reveal('.habilidades__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.habilidades__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTATO*/
sr.reveal('.contato__subtitle', {})
sr.reveal('.contato__text', {interval: 200})
sr.reveal('.contato__input', {delay: 400})
sr.reveal('.contato__button', {delay: 600})
