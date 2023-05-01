let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('open');
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
