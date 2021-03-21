const arrow = document.querySelector('.arrow');

const swiper = new Swiper('.swiper-container', {
	speed: 800,
	spaceBetween: 100,
	loop: true,
	navigation: {
		nextEl: '.review__next',
		prevEl: '.review__prev',
	},
});

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 300) {
		if (arrow.classList.contains('arrow--hidden')) {
			arrow.classList.remove('arrow--hidden');
		}
	} else {
		if (!arrow.classList.contains('arrow--hidden')) {
			arrow.classList.add('arrow--hidden');
		}
	}
});

document.forms.contacts.addEventListener('submit', e => {
	e.preventDefault();
	alert(`Заявка на имя ${document.forms.contacts.name.value} принята!`);
});
