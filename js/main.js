(function () {
    'use strict';

    // Mobile menu toggle
    var toggle = document.querySelector('[data-menu]');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var open = document.body.dataset.menuOpen === 'true';
            document.body.dataset.menuOpen = open ? 'false' : 'true';
        });
    }

    // Close menu when a nav link is clicked (mobile)
    document.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            document.body.dataset.menuOpen = 'false';
        });
    });

    // Lazy fade-in for offscreen images (background images use IntersectionObserver)
    var bgItems = document.querySelectorAll('[data-bg]');
    if ('IntersectionObserver' in window && bgItems.length) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                el.style.backgroundImage = 'url(' + el.dataset.bg + ')';
                el.classList.add('is-loaded');
                io.unobserve(el);
            });
        }, { rootMargin: '200px 0px' });
        bgItems.forEach(function (el) { io.observe(el); });
    }
})();
