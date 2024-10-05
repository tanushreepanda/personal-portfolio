const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelector('section');
const navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const nameInput = document.querySelector('#name');
const numberInput = document.querySelector('#number');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const msg = document.querySelector('#message');
const form = document.querySelector('form');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^[6-9]\d{9}$/;

form.addEventListener('submit', (event) => {
    let errorMessage = ''; 

    if (!emailPattern.test(emailInput.value)) {
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (!numberPattern.test(numberInput.value)) {
        errorMessage += 'Please enter a valid phone number starting with 6-9 and containing 10 digits.\n';
    }

    if (errorMessage !== '') {
        event.preventDefault();
        alert(errorMessage); 
    }
});

const links = document.querySelectorAll('a');
links.forEach(link => {
    link.setAttribute('target', '_blank');
});
