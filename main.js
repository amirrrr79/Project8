const Navbar=document.getElementById('navbar')
const aside=document.getElementById('aside')
const btn=document.getElementById('btn')
const btn_x=document.getElementById('btn_x')
const Scroll=document.getElementById('scroll')
const Nav_link1=document.getElementById('nav-link1')
const Nav_link2=document.getElementById('nav-link2')
const Nav_link3=document.getElementById('nav-link3')
const Nav_link4=document.getElementById('nav-link4')
const Nav_link5=document.getElementById('nav-link5')

window.addEventListener('scroll',function(){
    if(window.scrollY>80){
        Navbar.classList.add('navbar-show')
    }
    else{
        Navbar.classList.remove('navbar-show')
    }

    if(window.scrollY<500){
        Scroll.style.display="none"
    }
    else{
        Scroll.style.display="block"
    }
})


btn.addEventListener('click', function(){
    btn.style.display="none"
    btn_x.style.display="block"
    aside.classList.add('show')

})
btn_x.addEventListener('click', function(){
    btn.style.display="block"
    btn_x.style.display="none"
    aside.classList.remove('show')

})

Nav_link1.addEventListener('click', function(){
     aside.classList.remove('show')
     btn.style.display="block"
     btn_x.style.display="none"
})
Nav_link2.addEventListener('click', function(){
    aside.classList.remove('show')
    btn.style.display="block"
    btn_x.style.display="none"
})
Nav_link3.addEventListener('click', function(){
    aside.classList.remove('show')
    btn.style.display="block"
    btn_x.style.display="none"
})
Nav_link4.addEventListener('click', function(){
    aside.classList.remove('show')
    btn.style.display="block"
    btn_x.style.display="none"
})
Nav_link5.addEventListener('click', function(){
    aside.classList.remove('show')
    btn.style.display="block"
    btn_x.style.display="none"
})

