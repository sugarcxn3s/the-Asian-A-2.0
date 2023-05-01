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

const animeTitle = (element) => {
	const arrayText = element.innerHTML.split("");
	element.innerHTML = "";
	arrayText.forEach((letter, indice) => {
		setTimeout(() => (element.innerHTML += letter), 135 * indice);
	});
	element.classList.add("animate__shakeY");
};

const h1 = document.querySelector("h1.title");

animeTitle(h1);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting
			? entry.target.classList.add("show")
			: entry.target.classList.remove("show");
	});
});

const hiddenElements = document.querySelectorAll("div.hidden");

hiddenElements.forEach((el) => observer.observe(el));
