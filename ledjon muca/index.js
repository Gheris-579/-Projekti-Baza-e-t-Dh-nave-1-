document.addEventListener('DOMContentLoaded', function() {
    // Këtu mund të shtohen funksionalitete JavaScript në të ardhmen.
    // Për shembull, ndërveprim me butona, validim formularësh, etj.
    // Për momentin, faqja është statike, por ky skedar është gati për zgjerime.

    // Shembull: scroll-i i butë (smooth scroll) kur klikon linket e navigimit
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Për Prism.js: Aktivizo syntax highlighting pas ngarkimit të faqes
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});