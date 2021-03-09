//assigning constants for animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
container.addEventListener("mousemove", (e) => {

	let xAxis = (window.innerWidth / 2 - e.pageX) /10;
	let yAxis = ( window.innerHeight / 2 - e.pageY) / 10 ;

	card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});



let mouseCursor = document.querySelector('.cursor');
let navlinks = document.querySelectorAll('.nav-links li');
window.addEventListener('mousemove',cursor);
function cursor(e){
	mouseCursor.style.top = e.pageY +'px';
	mouseCursor.style.left = e.pageX +'px';
}
navlinks.forEach(link => {
	link.addEventListener('mouseleave', () => {
		mouseCursor.classList.remove("link-grow");
		link.classList.remove('hovered-link');

	});

	link.addEventListener('mouseover', () => {
		mouseCursor.classList.add("link-grow");
		link.classList.add('hovered-link');

	});
	
});


