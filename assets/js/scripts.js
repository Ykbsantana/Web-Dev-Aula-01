document.addEventListener('DOMContentLoaded', function () {

    /* =========================
       Menu Hambúrguer
    ========================= */

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            mobileMenu.style.display = expanded ? 'none' : 'block';
        });
    }

    /* =========================
       Dropdown (Desktop)
    ========================= */

    document.querySelectorAll('.nav-item-dropdown').forEach(function(item){
        const toggle = item.querySelector('.dropdown-toggle');
        const menu = item.querySelector('.dropdown-menu');

        if(!toggle || !menu) return;

        // hover
        item.addEventListener('mouseenter', () => menu.style.display = 'block');
        item.addEventListener('mouseleave', () => menu.style.display = 'none');

        // clique/acessibilidade
        toggle.addEventListener('click', function(e){
            e.preventDefault();
            const visible = menu.style.display === 'block';
            menu.style.display = visible ? 'none' : 'block';
        });
    });
});
