/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function activeClass(section) {
    var isActive = document.querySelector('.your-active-class');
    if (isActive) {
        isActive.classList.remove("your-active-class");
    }
    document.getElementById(section).classList.add("your-active-class");
}

function activeButton(button) {
    var isActive = document.querySelector('.menu__link__active');
    if (isActive) {
        isActive.classList.remove("menu__link__active");
    }
    document.getElementById(button).classList.add("menu__link__active");
}

function isInRange(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (document.documentElement.clientHeight + 300) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 1; i <= 4; i++) {
    var Child = document.createElement('li');
    Child.innerHTML = `<a href="#section${i}" id="section${i}Button" class="menu__link"> Section ${i} </a>`;
    navbar.appendChild(Child);
};


// Add class 'active' to section when near top of viewport
var sectionn = document.querySelectorAll('section').forEach(function (element) {
    window.addEventListener('scroll', function (event) {
        if (isInRange(element)) {
            activeClass(element.id)
            activeButton(element.id + 'Button')
        }
    }, false);
});


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.querySelectorAll('.menu__link').forEach(function (element) {
    element.addEventListener('click', () => {
        activeButton(element.id);
        activeClass(element.getAttribute("href").substring(1));
    });
});

// Set sections as active
// document.querySelectorAll('.menu__link').forEach(function (element) {
//     element.addEventListener('click', activeClass(element.getAttribute("href").substring(1)));
// });

