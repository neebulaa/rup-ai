document.addEventListener('DOMContentLoaded', function() {

    const loaderContainer = document.querySelector('.loader-container');
    setTimeout(() => {
        // Add fade-out animation
        loaderContainer.classList.add('fade-out');

        // Remove loader completely after transition ends
        loaderContainer.addEventListener('transitionend', () => {
            loaderContainer.remove();
            // Animate navbar elements with delay
            const logo = document.querySelector('#home .logo');
            const navItems = document.querySelectorAll('.nav-item');
            const navButton = document.querySelector('.nav-button');
            
            // Animate logo
            setTimeout(() => {
                logo.classList.add('active');
            }, 300);
            
            // Animate nav items with staggered delay
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('active');
                }, 500 + (index * 100));
            });
            
            // Animate button
            setTimeout(() => {
                navButton.classList.add('active');
            }, 500 + (navItems.length * 100));
            
            // Select elements to animate on scroll - UPDATED TO INCLUDE CREATORS SECTION
            const elementsToAnimate = document.querySelectorAll(`
                #home .left, #home .right,
                #home-extra .img-wrapper,
                #about .about-info, #about .about-datas, #about .data,
                #why-us .left, #why-us .right,
                #limitations .limitations-content, #limitations .limitation-card,
                #how-it-works .split, #how-it-works .work-card,
                #creators .creators-heading, #creators .creator-card,
                footer .split, footer .footer-info, footer nav
            `);

            // Add fade-in class to all selected elements
            elementsToAnimate.forEach(el => {
                el.classList.add('fade-in');
            });

            // Function to check if element is in viewport
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
                    rect.bottom >= 0
                );
            }

            // Function to handle scroll animation
            function checkScroll() {
                elementsToAnimate.forEach(el => {
                    if (isElementInViewport(el)) {
                        el.classList.add('active');
                    }
                });
            }

            // Check on initial load
            checkScroll();

            // Add scroll event listener
            window.addEventListener('scroll', checkScroll);
        });
    }, Math.random() * 1000 + 2000);
});