let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

//much of this is written by alvarotrigo.com//
let section = document.querySelectorAll("section");
let menu = document.getElementsByClassName("menu_item");
window.onscroll = () => {
    for(let i = 0; i < section.length; i++) {
        let top = window.scrollY;
        let offset = section[i].offsetTop - 150;
        let height = section[i].offsetHeight;
        let id = section[i].getAttribute("id");

        if(top >= offset && top < offset + height) {
            for(let j = 0; j < menu.length; j++) {
                menu[j].classList.remove("active");
            }
            menu[i].classList.add("active");
        }
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if(elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();
