
const button = document.querySelector('button')
const toasts = document.getElementById('toasts')

const messages = [
    'mess 1',
    'mess 2', 
    'mess 3',
]

button.addEventListener('click', () => createNotice('The login and password combo do not match. Try Again', 'error')
)
function createNotice(message = null, type=null){
    const notice = document.createElement('div')
    notice.classList.add('toast')
    notice.classList.add(type ? type : 'info')

    notice.innerText = message ? message : getMessage()

    toasts.appendChild(notice)

    setTimeout( ()=> {
        notice.remove()
    }, 4100)
}

function getMessage(){
    return messages[Math.floor(Math.random()* messages.length)]
}