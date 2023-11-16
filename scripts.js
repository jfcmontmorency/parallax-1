const headings = document.querySelectorAll('.heading');
window.addEventListener('scroll', () => {
	const scrollValue = window.scrollY;
	headings.forEach((heading, index) => {
		heading.style.top = `${scrollValue * .066 * index}px`;
	});
});