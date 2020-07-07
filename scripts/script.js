const modalAdd = document.querySelector('.modal__add') // modal window
const addAd = document.querySelector('.add__ad') // add advertisement
const modalBtnSubmit = document.querySelector('.modal__btn-submit') // submit button on modal
const modalSubmit = document.querySelector('.modal__submit') // form on modal add advertisement

// show modal add
addAd.addEventListener('click', () => {
	modalAdd.classList.remove('hide')
	modalBtnSubmit.disabled = true
})

// close modal add
modalAdd.addEventListener('click', (e) => {
	if (
		e.target.classList.contains('mopdal__close') ||
		e.target === modalAdd ||
		e.target.classList.contains('modal__close')
	) {
		modalAdd.classList.add('hide')
		modalSubmit.reset() // reset after send!
	}
})
