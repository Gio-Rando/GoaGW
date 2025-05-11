const p = document.getElementsByTagName("p")
const form = document.getElementsByTagName("form")
const h3 = document.getElementsByTagName("h3")
if(JSON.parse(localStorage.getItem("online"))){
    window.location.href ="./index.html"
}

let users = JSON.parse(localStorage.getItem("users")) || []
localStorage.setItem("users", JSON.stringify(users));

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

function Account(name,lastName, email, password) {
    return { name,lastName, email, password };
}

form[0].addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = form[0].name.value
    const lastName = form[0].lname.value
    const email = form[0].email.value
    const password = form[0].pass.value
    for(let i of users){
        if (email == i.email){
            h3[0].style.display = "block"
            return
        }
        else{
            h3[0].style.display = "none"
        }
    }
    users.push(new Account(name,lastName,email,password))
    setLocalStorage("users",users)
    localStorage.setItem("currentUser", JSON.stringify({ name, lastName }))
    localStorage.setItem("online", JSON.stringify(true))
    form[0].reset();
    window.location.href ="./index.html" 
})

form[1].addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = form[1].email.value
    const password = form[1].pass.value
    for(let i of users){
        if (email == i.email && password == i.password){
            const name = i.name
            const lastName = i.lastName
            localStorage.setItem("currentUser", JSON.stringify({ name, lastName }));
            localStorage.setItem("online", JSON.stringify(true))
            h3[1].style.display = "none"    
            form[1].reset();
            window.location.href ="./index.html"
        }
        else{
            console.log(i.email, i.password, email, password)
            console.clear()
            h3[1].style.display = "block"
        }

    }

})

for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("click",()=>{
        if(p[i].textContent == "Have An Account?"){
            form[0].style.display = "none"
            form[1].style.display = "flex"
            h3[1].style.display = "none"
            h3[0].style.display = "none"
            form[0].reset();
            form[1].reset();

        }
        else{
            h3[1].style.display = "none"
            h3[0].style.display = "none"
            form[0].style.display = "flex"
            form[1].style.display = "none"
            form[0].reset();
            form[1].reset();
        }
    })
}
