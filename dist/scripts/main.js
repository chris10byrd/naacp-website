document.addEventListener('DOMContentLoaded', ()=> {
    const hamburgerBtn = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close');
    const menu = document.querySelector('.menu');
    console.log(document.all);
    
    let toggled = false;
    
    closeBtn.addEventListener('click', ()=>{
        menu.classList.remove('show');
        toggled = false;
    });

    hamburgerBtn.addEventListener('click', ()=> {
        console.log('clicked hamburger');

        if (!toggled) {
            menu.classList.add('show');
            toggled = !toggled;
        }
        else {
            menu.classList.remove('show');
            toggled = !toggled;
        }
    });

});