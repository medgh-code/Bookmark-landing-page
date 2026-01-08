const tabs = document.querySelectorAll(".tab")
const simpleBtn = document.querySelector(".simpleBtn")
const speedyBtn = document.querySelector(".speedyBtn")
const easyBtn = document.querySelector(".easyBtn")
const featureSelector = document.querySelector(".featureSelector")
const askItem = document.querySelectorAll(".askItem")
const alertIcon = document.querySelector(".alert")
const contactBtn = document.querySelector(".contactBtn")
const inputEmail = document.querySelector(".inputEmail")
const errorText = document.querySelector(".errorText")
const menuBar = document.querySelector(".menuBar")
const closeBtn = document.querySelector(".closeBtn")
const menu = document.querySelector(".menu")
const menuSiteLinks = document.querySelector(".menuSiteLinks")
const links = menuSiteLinks.querySelectorAll("a")


window.addEventListener("resize",function(){
    if(this.window.innerWidth <= 755){
       menuBar.classList.remove("hidden")
    }else{
        menuBar.classList.add("hidden")
    }
})
window.addEventListener("load",function(){
    if(this.window.innerWidth <= 755){
       menuBar.classList.remove("hidden")
    }else{
        menuBar.classList.add("hidden")
    }
})
menuBar.addEventListener("click",function(){
    menu.classList.remove("hidden")
})

simpleBtn.addEventListener("click",function(){
    const items = featureSelector.querySelectorAll("li")
    items.forEach(element=>{
        element.classList.remove("active")
    })
    simpleBtn.classList.add("active")
    tabs.forEach(element=>{
         element.classList.add("hidden")
        if(element.classList.contains("simple")){
            element.classList.remove("hidden")
        }
    })
})

speedyBtn.addEventListener("click",function(){
    const items = featureSelector.querySelectorAll("li")
    items.forEach(element=>{
        element.classList.remove("active")
    })
    speedyBtn.classList.add("active")
    tabs.forEach(element=>{
        element.classList.add("hidden")
        if(element.classList.contains("speedy")){
            element.classList.remove("hidden")
        }
        
    })
})

easyBtn.addEventListener("click",function(){
    const items = featureSelector.querySelectorAll("li")
    items.forEach(element=>{
        element.classList.remove("active")
    })
    easyBtn.classList.add("active")
    tabs.forEach(element=>{
        element.classList.add("hidden")
        if(element.classList.contains("easy")){
            element.classList.remove("hidden")
        }
    })
})

askItem.forEach(element=>{
    element.addEventListener("click",function(){
        const response = element.querySelector(".response");
        const showBtn = element.querySelector(".showBtn")
        response.classList.toggle("hidden")
        if(showBtn.classList.contains("fa-angle-down")){
            showBtn.classList.replace("fa-angle-down","fa-angle-up")
        }else{
            showBtn.classList.replace("fa-angle-up","fa-angle-down")
        }
    })
})

contactBtn.addEventListener("click",function(){
    const container = contactBtn.previousElementSibling;

    if(inputEmail.value.length === 0){
        alertIcon.classList.remove("hidden")
        errorText.classList.remove("hidden")
        container.style.backgroundColor = "hsl(0, 94%, 66%)"
    }else{
        alertIcon.classList.add("hidden")
        errorText.classList.add("hidden")
        container.style.backgroundColor = "none"
    }
})
inputEmail.addEventListener("input",function(){
    const emailRegex = /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/;
;
     const container = contactBtn.previousElementSibling;
    if(emailRegex.test(inputEmail.value)){
        alertIcon.classList.add("hidden")
        errorText.classList.add("hidden")
        container.style.backgroundColor = "transparent"
    }else{
         alertIcon.classList.remove("hidden")
        errorText.classList.remove("hidden")
        container.style.backgroundColor = "hsl(0, 94%, 66%)"
    }
})

closeBtn.addEventListener("click",function(){
  menu.classList.add("hidden")
})

links.forEach(element=>{
    element.addEventListener("click",function(){
       menu.classList.add("hidden")
    })
})