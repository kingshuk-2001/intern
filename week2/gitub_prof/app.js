const toggle = document.getElementById('toggle')

toggle.addEventListener("change", (e) =>{
    document.body.classList.toggle("dark",e.target.checked)
})

btn.addEventListener("click", ()=>{
    nav.classList.toggle('active')
})