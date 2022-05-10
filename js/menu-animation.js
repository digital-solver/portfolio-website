function animateMenu() {
    // If menu hasn't been touched, open it.
    if (document.getElementById("main-menu").classList.contains('menu-untouched')) {
        document.querySelector("#menu-svg-path-top").classList.add("open-menu-top");
        document.querySelector("#menu-svg-path-middle").classList.add("open-menu-middle");
        document.querySelector("#menu-svg-path-bottom").classList.add("open-menu-bottom");
        document.querySelector("#main-nav-ul").classList.add("open-menu-content");
        document.getElementById("main-menu").classList.replace('menu-untouched', 'menu-open');
    }

    // If menu has been opened, close it.
    else if (document.getElementById("main-menu").classList.contains('menu-open')) {
        document.querySelector("#menu-svg-path-top").classList.remove("open-menu-top");
        void document.querySelector("#menu-svg-path-top").offsetWidth;

        document.querySelector("#menu-svg-path-middle").classList.remove("open-menu-middle");
        void document.querySelector("#menu-svg-path-middle").offsetWidth;

        document.querySelector("#menu-svg-path-bottom").classList.remove("open-menu-bottom");
        void document.querySelector("#menu-svg-path-bottom").offsetWidth;

        document.querySelector("#main-nav-ul").classList.remove("open-menu-content");
        void document.querySelector("#main-nav-ul").offsetWidth;
        document.querySelector("#main-nav-ul").classList.add("close-menu-content");

        document.getElementById("main-menu").classList.replace('menu-open', 'menu-closed')
    }

    // If menu has been closed, open it.
    else {
        document.querySelector("#menu-svg-path-top").classList.remove("close-menu-top");
        void document.querySelector("#menu-svg-path-top").offsetWidth
        document.querySelector("#menu-svg-path-top").classList.add("open-menu-top");

        document.querySelector("#menu-svg-path-middle").classList.remove("close-menu-middle");
        void document.querySelector("#menu-svg-path-middle").offsetWidth
        document.querySelector("#menu-svg-path-middle").classList.add("open-menu-middle");

        document.querySelector("#menu-svg-path-bottom").classList.remove("close-menu-bottom");
        void document.querySelector("#menu-svg-path-bottom").offsetWidth
        document.querySelector("#menu-svg-path-bottom").classList.add("open-menu-bottom");

        document.querySelector("#main-nav-ul").classList.remove("close-menu-content");
        void document.querySelector("#main-nav-ul").offsetWidth
        document.querySelector("#main-nav-ul").classList.add("open-menu-content");
        
        document.getElementById("main-menu").classList.replace('menu-closed', 'menu-open')
    }
}

document.getElementById("Capa_1").addEventListener("click", function () { animateMenu(); });