// NAVBAR
const navbarMenu = document.querySelector('.navbar-menu')
const toggleNavbar = document.querySelector('.navbar-toggle')
const seacrhPopup = document.querySelector('.search-popup')
const toggleSearchPopup = document.querySelector('.search-popup-toggle')

toggleNavbar.addEventListener('click', function () {
	navbarMenu.classList.toggle('show')

	seacrhPopup.classList.remove('show')
})


toggleSearchPopup.addEventListener('click', function (e) {
	e.preventDefault()
	seacrhPopup.classList.toggle('show')

	navbarMenu.classList.remove('show')
})