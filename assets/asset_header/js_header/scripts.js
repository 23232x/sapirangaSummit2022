/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarnewShrink = function () {
        const navbarnewCollapsible = document.body.querySelector('#mainNav');
        if (!navbarnewCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarnewCollapsible.classList.remove('navbarnew-shrink')
        } else {
            navbarnewCollapsible.classList.add('navbarnew-shrink')
        }

    };

    // Shrink the navbarnew 
    navbarnewShrink();

    // Shrink the navbarnew when page is scrolled
    document.addEventListener('scroll', navbarnewShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbarnew when toggler is visible
    const navbarnewToggler = document.body.querySelector('.navbarnew-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarnewResponsive .nav-linknew')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarnewToggler).display !== 'none') {
                navbarnewToggler.click();
            }
        });
    });

});
