document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburgerIcon');
    const hamburgerMenu = document.querySelector('.hamburgerMenu');

    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', () => {
            if (hamburgerMenu) {
                hamburgerIcon.classList.toggle("hidden");
                hamburgerMenu.classList.toggle("hidden");
            }
        });
    }

    document.addEventListener('click', function(event) {
        // Check if the clicked element is the hamburgerIcon or its descendant
        if (!hamburgerIcon.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            // Clicked outside the hamburgerIcon and hamburgerMenu
            if (!hamburgerMenu.classList.contains("hidden")) {
                hamburgerIcon.classList.toggle("hidden");
                hamburgerMenu.classList.toggle("hidden");
            }
        }
    });

    addClickToScrollListener(document.getElementById('homeItem'), document.querySelector('.homePage'));
    addClickToScrollListener(document.getElementById('aboutItem'), document.querySelector('.aboutMeSection'));
    addClickToScrollListener(document.getElementById('experienceItem'), document.querySelector('.resumeContainer'));
    addClickToScrollListener(document.getElementById('contactItem'), document.querySelector('.contactContainer'));

    const cloud1 = document.querySelector('#cloud1');

    // When animation ends, reposition the element
    cloud1.addEventListener('animationiteration', () => {
        // Reset element position to start from the left side
        cloud1.style.setProperty('--cloud-1-start', '-150px');
    });

    const cloud2 = document.querySelector('#cloud2');

    // When animation ends, reposition the element
    cloud2.addEventListener('animationiteration', () => {
        // Reset element position to start from the left side
        cloud2.style.setProperty('--cloud-2-start', '-80px');
    });

    const cloud3 = document.querySelector('#cloud3');

    // When animation ends, reposition the element
    cloud3.addEventListener('animationiteration', () => {
        const viewWidthPlus100px = window.innerWidth + 100;
        // Reset element position to start from the left side
        cloud3.style.setProperty('--cloud-3-start', viewWidthPlus100px.toString() + 'px');
    });
});

function addClickToScrollListener(element, targetScroll) {
    if (element) {
        element.addEventListener('click', () => {
            if (targetScroll) {
                targetScroll.scrollIntoView({ behavior: 'smooth' });
            }
        })
    }
}