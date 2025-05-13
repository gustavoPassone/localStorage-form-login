const btnLogout = document.querySelector("#logout")
const userName = localStorage.getItem("user")

const logout = () => {
    localStorage.removeItem("status")
    window.location.href = '../index.html'
}

// configurações perfil
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputBiografia = document.querySelector("#bio")
const btnSalvar = document.querySelector("#btnSalvar");

const saveConfig = () => {
    let fullName = inputName.value;
    let email = inputEmail.value;
    let bio = inputBiografia.value
    
    localStorage.setItem("name", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("bio", bio);
};

btnLogout.addEventListener('click', logout);
btnSalvar.addEventListener('click', saveConfig);