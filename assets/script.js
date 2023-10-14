const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
var current_slide_num = 0;

var image = document.getElementsByClassName("banner-img");


const myRightButton = document.getElementsByClassName("arrow_right");

Array.from(myRightButton).forEach(Rb => {
	Rb.addEventListener("click",
		function () {
			var banner = document.querySelectorAll("#banner p");

			current_slide_num += 1;
			if (current_slide_num > 3) {
				current_slide_num = 0;

			}
			unselect_dot(sub_dot);
			// dots[current_slide_num].classList.add("dot_selected");
			document.getElementsByClassName('dot')[current_slide_num].classList.add("dot_selected");

			image[0].src = "./assets/images/slideshow/" + slides[current_slide_num].image;

			var element = document.createElement("p");

			banner[0].innerHTML = slides[current_slide_num].tagLine;

			//document.getElementById("banner").replaceChild(element, banner[0]);
			// const parentDiv = sp2;
			// parentDiv.replaceChild(banner, p);
		});
});

const myLeftButton = document.getElementsByClassName("arrow_left");

Array.from(myLeftButton).forEach(Rb => {
	Rb.addEventListener("click", function() {
		var banner = document.querySelectorAll("#banner p");

		current_slide_num -= 1;
		if (current_slide_num < 0 ) {
			current_slide_num = 3;
		}
		unselect_dot(sub_dot);
		document.getElementsByClassName('dot')[current_slide_num].classList.add("dot_selected");

		image[0].src = "./assets/images/slideshow/" + slides[current_slide_num].image;

		var element = document.createElement("p");

		banner[0].innerHTML = slides[current_slide_num].tagLine;
	});
});

const dots = document.getElementsByClassName("dots");

function afficherBoutonsDesSlides(slides) {
	for (const slide of slides) {
		let index = slides.indexOf(slide);
		console.log(index);
		var element = document.createElement("div");
		// remplacer/modifier à la source de l'img
		element.className = "dot";
		// inserer dans le html
		dots[0].appendChild(element).addEventListener("click", function() {
			// unselect_dot(sub_dot);
			// dot.classList.add("dot_selected");
			image[0].src = "./assets/images/slideshow/" + slide.image;
			current_slide_num = index;
		});

	}
}

afficherBoutonsDesSlides(slides);


function unselect_dot(dots) {
	Array.from(dots).forEach(dot => {
		dot.classList.remove("dot_selected");
	});
}


const sub_dot = document.getElementsByClassName("dot");
sub_dot[0].classList.add("dot_selected");

Array.from(sub_dot).forEach(dot => {
	dot.addEventListener("click", function() {
		unselect_dot(sub_dot);
		dot.classList.add("dot_selected");
	});
});

