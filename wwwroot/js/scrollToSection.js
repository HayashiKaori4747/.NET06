window.scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
        setTimeout(() => {
            if (window.bootstrap && window.bootstrap.ScrollSpy) {
                
                const sideNav = document.querySelector('#sideNav');
                if (sideNav) {
                    
                    document.body.removeAttribute('data-bs-spy');
                    document.body.setAttribute('data-bs-spy', 'scroll');
                    document.body.setAttribute('data-bs-target', '#sideNav');
                    document.body.setAttribute('data-bs-offset', '100');
                   
                    new window.bootstrap.ScrollSpy(document.body, {
                        target: '#sideNav',
                        offset: 100
                    });
                }
            }
        }, 400);
    }
};

window.addEventListener('DOMContentLoaded', () => {
    if (window.bootstrap && window.bootstrap.ScrollSpy) {
        const sideNav = document.querySelector('#sideNav');
        if (sideNav) {
            new window.bootstrap.ScrollSpy(document.body, {
                target: '#sideNav',
                offset: 100
            });
        }
    }
});