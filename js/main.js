function modal() {
    let menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        let modalRight = document.querySelector('nav');
        modalRight.classList.add('move-left')
        menu.style.display = 'none';
        let modalBottom = document.querySelector('.modalBottom');
        modalBottom.classList.add('move-up');

    });

    let close = document.querySelector('.fa-times');
    close.addEventListener('click', () => {
        let modalRight = document.querySelector('nav');
        modalRight.classList.remove('move-left')
        menu.style.display = 'block';
        let modalBottom = document.querySelector('.modalBottom');
        modalBottom.classList.remove('move-up');
        let content = document.querySelector('.content');
        content.style.display = 'none';
    })
};
modal();

function showContent() {
    document.querySelectorAll('.display').forEach(item => {
        item.addEventListener('click', (event) => {
            let content = document.querySelector('.content');
            content.style.display = 'block';
            let projects = document.querySelector('.projectSet');
            let skills = document.querySelector('.skillSet');
            let contact = document.querySelector('.contact');
            let about = document.querySelector('.about');

            if (event.target.classList.contains('projects') === true) {
                projects.style.display = 'block';
                if (skills.style.display === 'block') {
                    skills.style.display = 'none';
                }
                if (contact.style.display === 'block') {
                    contact.style.display = 'none';
                }
                if (about.style.display === 'block') {
                    about.style.display = 'none';
                }
            };
            if (event.target.classList.contains('skills') === true) {
                skills.style.display = 'block';
                if (projects.style.display === 'block') {
                    projects.style.display = 'none';
                }
                if (contact.style.display === 'block') {
                    contact.style.display = 'none';
                }
                if (about.style.display === 'block') {
                    about.style.display = 'none';
                }
            };
            if (event.target.classList.contains('contact-me') === true) {
                contact.style.display = "block";
                if (projects.style.display === 'block') {
                    projects.style.display = 'none';
                }
                if (skills.style.display === 'block') {
                    skills.style.display = 'none';
                }
                if (about.style.display === 'block') {
                    about.style.display = 'none';
                }
            };
            if (event.target.classList.contains('about-me') === true) {
                about.style.display = 'block';
                if (projects.style.display === 'block') {
                    projects.style.display = 'none';
                }
                if (skills.style.display === 'block') {
                    skills.style.display = 'none';
                }
                if (contact.style.display === 'block') {
                    contact.style.display = 'none';
                }
            };
        });
    })
};
showContent();

function closeNav() {
    let close = document.querySelector('.close');
    close.addEventListener('click', () => {
        let navMdl = document.querySelector('.nav-modal');
        navMdl.classList.remove('move-down')
        let navProjects = document.querySelector('.projects-modal')
        navProjects.style.display = 'none';
        let navSkills = document.querySelector('.skills-modal');
        navSkills.style.display = 'none';
        let navContact = document.querySelector('.contact-modal')
        navContact.style.display = 'none';
        let navAbout = document.querySelector('.about-modal')
        navAbout.style.display = 'none';
    })
}
closeNav();

function openProjects() {
    let projects = document.querySelector('.mobile-project');
    projects.addEventListener('click', () => {
        let navMdl = document.querySelector('.nav-modal');
        navMdl.classList.add('move-down');
        let navProjects = document.querySelector('.projects-modal')
        navProjects.style.display = 'block';
    })
}
openProjects();

function openSkills() {
    let skills = document.querySelector('.mobile-skills');
    skills.addEventListener('click', () => {
        let navMdl = document.querySelector('.nav-modal');
        navMdl.classList.add('move-down');
        let navSkills = document.querySelector('.skills-modal');
        navSkills.style.display = 'block';
    })
}
openSkills();

function openContact() {
    let contacts = document.querySelector('.mobile-contact');
    contacts.addEventListener('click', () => {
        let navMdl = document.querySelector('.nav-modal');
        navMdl.classList.add('move-down');
        let navContact = document.querySelector('.contact-modal')
        navContact.style.display = 'block';
    })
}
openContact();

function openAbout() {
    let about = document.querySelector('.mobile-about');
    about.addEventListener('click', () => {
        let navMdl = document.querySelector('.nav-modal');
        navMdl.classList.add('move-down');
        let navContact = document.querySelector('.about-modal')
        navContact.style.display = 'block';
    })
};
openAbout();

// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 600;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}