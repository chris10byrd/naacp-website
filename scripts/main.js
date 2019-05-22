document.addEventListener('DOMContentLoaded', ()=>{
    console.log("uh woah");
    
    const menuStyle = document.querySelector('.mobile-menu').style;

    const openBtn = document.querySelector('#hamburger');
    const closeBtn = document.querySelector('.close');

    openBtn.addEventListener('click', ()=>{
        menuStyle.display = 'inherit';
    });

    closeBtn.addEventListener('click', ()=> {
        menuStyle.display = 'none';
    });

});  