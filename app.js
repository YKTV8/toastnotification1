
const button = document.querySelector('button')
const toasts = document.getElementById('toasts')

const messages = [
    'mess 1',
    'mess 2', 
    'mess 3',
]

button.addEventListener('click', () => createNotice('The login and password combo do not match. Try Again')
)
function createNotice(message = null){
    const notice = document.createElement('div')
    notice.classList.add('toasts')

    notice.innerText = message ? message : getMessage()

    toasts.appendChild(notice)

    setTimeout( ()=> {
        notice.remove()
    }, 1500)
}

function getMessage(){
    return messages[Math.floor(Math.random()* messages.length)]
}