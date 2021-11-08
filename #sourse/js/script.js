// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================
// MOBILE =============================================================
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

// 	alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")
// /MOBILE =============================================================

const burger = document.querySelector('.menu-header_burger');
if (burger) {
	burger.addEventListener('click', function () {
		this.classList.toggle('active');
	})
};



const items = document.querySelectorAll('[data-scroll]');
const item = document.querySelectorAll('[data-link]');
console.log(item);
for (var a = 0; a < item.length; a++) {
	item[a].addEventListener('click', function (e) {
		const target = e.currentTarget.getAttribute('data-link')
		items[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
	});
}