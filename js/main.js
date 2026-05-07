(function () {
    'use strict';

    // -------- Mobile menu --------
    var toggle = document.querySelector('[data-menu]');
    if (toggle) {
        toggle.addEventListener('click', function () {
            var open = document.body.dataset.menuOpen === 'true';
            document.body.dataset.menuOpen = open ? 'false' : 'true';
            toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        });
    }
    document.querySelectorAll('.nav__link').forEach(function (l) {
        l.addEventListener('click', function () { document.body.dataset.menuOpen = 'false'; });
    });

    // -------- Carousel (banner with dots) --------
    document.querySelectorAll('[data-carousel]').forEach(function (root) {
        var slides = root.querySelectorAll('[data-slide]');
        var dots   = root.querySelectorAll('[data-dot]');
        var i = 0;
        function show(n) {
            i = (n + slides.length) % slides.length;
            slides.forEach(function (s, idx) { s.style.opacity = idx === i ? '1' : '0'; });
            dots.forEach(function (d, idx)   { d.setAttribute('aria-current', idx === i ? 'true' : 'false'); });
        }
        if (slides.length > 1) {
            slides.forEach(function (s) { s.style.transition = 'opacity 0.6s ease'; s.style.position = 'absolute'; s.style.inset = '0'; });
            show(0);
            setInterval(function () { show(i + 1); }, 5000);
            dots.forEach(function (d, idx) { d.addEventListener('click', function () { show(idx); }); });
        }
    });

    // -------- Smooth scroll for anchor links --------
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var id = a.getAttribute('href');
            if (id.length < 2) return;
            var target = document.querySelector(id);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
})();
