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