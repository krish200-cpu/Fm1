document.addEventListener('DOMContentLoaded', () => {
    
    /* ---------------------------------------------
    1. Sticky Navigation Effect
    ---------------------------------------------
    */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ---------------------------------------------
    2. Mobile Menu Toggle
    ---------------------------------------------
    */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle menu open/close
    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Simple animation for hamburger lines could go here
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    /* ---------------------------------------------
    3. Category Filtering
    ---------------------------------------------
    */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            categoryCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                    // Add fade-in animation logic here if desired
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });

    /* ---------------------------------------------
    4. Smooth Scrolling for Anchor Links
    ---------------------------------------------
    (Native CSS scroll-behavior usually handles this, 
     but this ensures fallback support)
    */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
