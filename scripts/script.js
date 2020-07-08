const modalAdd = document.querySelector('.modal__add') // modal window
const addAd = document.querySelector('.add__ad') // add advertisement
const itemModal = document.querySelector('.modal__item')
const catalog = document.querySelector('.catalog') // catalog adds
const modalBtnSubmit = document.querySelector('.modal__btn-submit') // submit button on modal
const modalSubmit = document.querySelector('.modal__submit') // form on modal add advertisement
const body = document.querySelector('body')

// close modal
const handlerCloseModal = (modal) => {
	if (event.target.classList.contains('modal__close') || event.target === modal) {
		modal.classList.add('hide')
		modalSubmit.reset() // reset after send!
	}
}

// open modal
const handlerOpenModal = (modal) => {
	modal.classList.remove('hide')
	modalBtnSubmit.disabled = true
}

// close modal when press ESC
const handlerModalEscPress = () => {
	if (this.event.code === 'Escape') {
		const modals = document.querySelectorAll('.modal')
		/**
		 * TODO
		 *
		 * add filter for faster search
		 */
		for (let i = 0; i < modals.length; i++) {
			modals[i].classList.add('hide')
		}
	}
}

// close modal esc
body.addEventListener('keydown', handlerModalEscPress.bind(this))

// show modal add
addAd.addEventListener('click', handlerOpenModal.bind(this, modalAdd))

// close modal add
modalAdd.addEventListener('click', handlerCloseModal.bind(this, modalAdd))

// open item modal
catalog.addEventListener('click', handlerOpenModal.bind(this, itemModal))
// close item modal
itemModal.addEventListener('click', handlerCloseModal.bind(this, itemModal))
