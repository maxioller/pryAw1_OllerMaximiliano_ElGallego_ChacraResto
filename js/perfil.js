import { userCard } from "../components/userCard.js";

const getUserData = (key)=>{
    return JSON.parse(sessionStorage.getItem(key));
}
const logOut = ()=> {
    sessionStorage.removeItem("userData");
    window.location.href = "./login.html";
}

window.addEventListener('load', ()=>{
    const userInfo = getUserData('userData');
    console.log(userInfo);

    if (!userInfo) {
    window.location.href = "./login.html";
    return;
    };

    const userContainer = document.getElementById('userContainer');
    const card = userCard(userInfo);

    userContainer.innerHTML = card;
    document.getElementById('boton-logout').addEventListener('click', ()=>{
        logOut();
    })
})