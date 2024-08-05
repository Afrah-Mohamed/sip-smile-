// const menu =document.querySelector('#menu');


// menu.onclick=function(){
//     menu.classList.toggle('fa-times');
// }


// menu.addEventListener('click', () => {
//     menu.classList.toggle('fa-times');
// })

// function hideNavbar(){
// if(screenX<=860){
//     menu.style.diplay = 'block';
    
// }}


// scroll btn
const scrollBtn = document.querySelector('#scrollBtn')
window.onscroll =function(){
    if(scrollY >= 100){
        scrollBtn.style.display = 'block';

    }
    else{
        scrollBtn.style.display = 'none';

    }
}
scrollBtn.onclick=function(){
   scroll({
    left:0,
    top:0,
    behavior:"smooth"

   })
}

const sidebar=document.querySelector('.sidebar')
function showSidebar(){
    sidebar.style.display='flex'

}
function hideSidebar(){
    sidebar.style.display='none'
}


