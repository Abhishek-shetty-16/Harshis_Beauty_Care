document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.fade-in, .slide-in').forEach((el) => {
        el.style.opacity = "0";
    });

    function revealOnScroll() {
        document.querySelectorAll('.fade-in, .slide-in').forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});