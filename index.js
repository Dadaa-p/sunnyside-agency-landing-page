const harmburger = document.querySelector("nav .harmburger");
const nav = document.querySelector("header ul")

harmburger.addEventListener("click",()=>{
    nav.classList.toggle("show");
})


