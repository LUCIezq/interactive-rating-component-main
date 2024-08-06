const buttons = document.querySelectorAll('.rating__element');


buttons.forEach(children => {

    children.addEventListener('click', e => {
        const currentActive = active();
        if (currentActive) {
            currentActive.classList.remove('selected');
        }
        children.classList.toggle('selected');

        const active__button = active();

        if (active__button != null) {
            document.querySelector('.rating__submit').addEventListener('click', e => {
                const container__visible = document.querySelector('.rating').classList.add('hidden');
                const container__hidden = document.querySelector('.container__hidden').classList.add('visible');
                const selection__actual = active__button.textContent;
                const selection__paragraph = document.querySelector('.rating__selection');

                selection__paragraph.textContent = 'You selected ' + selection__actual + ' out of ' + buttons.length;
            })
        }
    })
})


const button__submit = document.querySelector('.rating__submit')

buttons.forEach(element => {
    element.addEventListener('click', () => {
        button__submit.classList.add('selected-submit');
    })
})


function active() {
    return Array.from(buttons).find(child => child.classList.contains('selected'));
}