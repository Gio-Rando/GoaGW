const username = document.getElementById("username")
const ic = document.getElementsByClassName("fa-solid fa-right-from-bracket")
let online = !JSON.parse(localStorage.getItem("online")) || false 
window.addEventListener("load",()=>{
    if(online){
        window.location.href ="./sign.html" 
    }
    username.textContent = `${JSON.parse(localStorage.getItem("currentUser")).name} ${JSON.parse(localStorage.getItem("currentUser")).lastName} `
})
ic[0].addEventListener("click",()=>{
    localStorage.setItem("online",JSON.stringify(false))
    window.location.href ="./sign.html" 
})

