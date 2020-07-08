const db = []
const modalAdd = document.querySelector('.modal__add') // modal window
const addAd = document.querySelector('.add__ad') // add advertisement
const itemModal = document.querySelector('.modal__item')
const catalog = document.querySelector('.catalog') // catalog adds
const modalBtnSubmit = document.querySelector('.modal__btn-submit') // submit button on modal
const modalSubmit = document.querySelector('.modal__submit') // form on modal add advertisement
const body = document.querySelector('body')
const elementsModalSubmit = [...modalSubmit.elements].filter(
	(elem) => elem.tagName !== 'BUTTON' && elem.type !== 'submit'
)
const modalBtnWarning = document.querySelector('.modal__btn-warning')

modalSubmit.addEventListener('input', () => {
	const validForm = elementsModalSubmit.every((elem) => elem.value)
	console.log(validForm)
	modalBtnSubmit.disabled = !validForm
	modalBtnWarning.style.display = validForm ? 'none' : ''
})

modalSubmit.addEventListener('submit', function (event) {
	event.preventDefault()
	const itemObj = {}
	for (const elem of elementsModalSubmit) {
		itemObj[elem.name] = elem.value
	}
	db.push(itemObj)
	modalSubmit.reset()
})

// close modal
const handlerCloseModal = function (event) {
	if (event.target.classList.contains('modal__close') || event.target === this) {
		this.classList.add('hide')
		modalSubmit.reset() // reset after send!
		body.removeEventListener('keydown', handlerModalEscPress.bind(this))
	}
}

// open modal
const handlerOpenModal = (modal) => {
	// close modal esc
	body.addEventListener('keydown', handlerModalEscPress.bind(this))

	if (this.event.target.closest('.card')) {
		modal.classList.remove('hide')
	} else if (this.event.target.classList.contains('btn')) {
		modal.classList.remove('hide')
		modalBtnSubmit.disabled = true
	}
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
		body.removeEventListener('keydown', handlerModalEscPress.bind(this))
	}
}

// show modal add
addAd.addEventListener('click', handlerOpenModal.bind(this, modalAdd))

// close modal add
modalAdd.addEventListener('click', handlerCloseModal)

// open item modal
catalog.addEventListener('click', handlerOpenModal.bind(this, itemModal))
// close item modal
itemModal.addEventListener('click', handlerCloseModal)
