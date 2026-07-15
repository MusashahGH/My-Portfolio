/*=============== HOME SPLIT TEXT ===============*/
/* Tumhari current HTML mein split-text ke liye special spans/data-attributes nahi hain,
   isliye yeh section abhi skip kar rahe hain. Agar chahiye to bata dena, add kar denge. */
const { animate, text, stagger } =anime

const { chars: chars1 } = text.split('.home__profession-1', {chars:true}) 
const { chars: chars2 } = text.split('.home__profession-2', {chars:true}) 

animate(chars1,{
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 4000, ease: 'in(3)'},
    ],
    duration: 900,
    ease: 'out(3)',
    delay: stagger(80),
    loop: true,
})

animate(chars2,{
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 4000, ease: 'in(3)'},
    ],
    duration: 900,
    ease: 'out(3)',
    delay: stagger(80),
    loop: true,
})

/*================ SWIPER PROJECTS ================*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});



/*=============== WORK TABS ===============*/
/* FOR NOW EMPTY  */

/*=============== SERVICES ACCORDION ===============*/
/* FOR NOW EMPTY  */


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
/* FOR NOW EMPTY  */


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
    // Use clipboard API to copy text
    navigator.clipboard.writeText(copyEmail).then(() => {
        copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'
        
        // Restore the original text
        setTimeout(() => {
            copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
        }, 2000)
    })
})

/*=============== CURRENT YEAR OF THE FOOTER ===============*/
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear()

// Years update automatically
textYear.textContent = currentYear


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    // get the position by scrolling down
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id, // id of each section
              top = section.offsetTop - 50, // Distance from the top edge
              height = section.offsetHeight, // Element height
              link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

        if(!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY < top + height)
    })
}

window.addEventListener('scroll', scrollActive)



/*=============== CUSTOM CURSOR ===============*/
/*================ CUSTOM CURSOR ================*/
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 // Store mouse position

const cursorMove = () => {
  // Position the cursor
  cursor.style.left = `${mouseX}px`
  cursor.style.top = `${mouseY}px`
  cursor.style.transform = 'translate(-50%, -50%)'

  // Update the cursor animation
  requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

cursorMove()

/* Hide custom cursor on links */
const a = document.querySelectorAll('a')

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__image, .projects__container, .work__container,
.testimonials__container, .contact__container`)
sr.reveal(`.home__data`, {delay: 900, origin: 'bottom'})
sr.reveal(`.home__info`, {delay: 1200, origin: 'bottom'})
sr.reveal(`.home__social, .home__cv`, {delay: 1500})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__image`, {origin: 'right'})
sr.reveal(`.services__card`, {interval: 100})

/*=============== TIMELINE TABS ===============*/
const timelineTabs = document.querySelectorAll('.timeline__tab')
const timelineContents = document.querySelectorAll('.timeline__content')

timelineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target

        timelineTabs.forEach(t => t.classList.remove('active-tab'))
        tab.classList.add('active-tab')

        timelineContents.forEach(content => {
            content.classList.remove('active-content')
            if (content.id === target) {
                content.classList.add('active-content')
            }
        })
    })
})
