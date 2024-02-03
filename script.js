let textoSinopse = document.querySelector('#p-sinopse')

let renderAvatar = document.querySelector('#render-avatar')

const form = document.querySelector('.form-comentar')
const formMask = document.querySelector('.form-mask')


function modoAvatar() {
    renderAvatar.src = "assets/korra-the-avatar-state.png"
}


function aparecerSinopse() {
    textoSinopse.style.display = "block"
}


function aparecerForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    formMask.style.visibility = "visible"
}

function sumirForm() {
    form.style.left = "-340px"
    form.style.transform = "none"
    formMask.style.visibility = "hidden"
}