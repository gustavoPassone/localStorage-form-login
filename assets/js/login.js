const inputLogin = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const btnLogin = document.querySelector("#SignInBtn")

const loginUsuario = () => {
    // localstorage
    let localName = localStorage.getItem("user")
    let localPassword = localStorage.getItem("password")
    // inputs
    let userLogin = inputLogin.value
    let userPassword = inputPassword.value

    if (userLogin == localName && userPassword == localPassword) {
        localStorage.setItem("status", "true")
        setTimeout(() => {
            window.location.href = '../../pages/home.html'
            alert("Login realizado com sucesso!")
        }, 300);
        return;
    } 
    alert("Usuario ou senha incorreto")
}


const loginStatus = () => {
    let status = localStorage.getItem("status")
    
    if (status == "true") {
        window.location.href = '../../pages/home.html'
    }
}
loginStatus()

btnLogin.addEventListener("click", loginUsuario)