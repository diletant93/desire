export default function setRightsideMenu(){
    const menuButton = document.querySelector('.header__button')
    const rightsideMenu = document.querySelector('.rightside-menu')
    const rightsideMenuInner = document.querySelector('.rightside-menu__inner')
    const rightsideMenuCloseButton = document.querySelector('.rightside-menu__close')
    
    function openRightSideMenu(){
        rightsideMenu.classList.remove('rightside-menu--closed')
    }
    function closeRightSideMenu(){
        rightsideMenu.classList.add('rightside-menu--closed')
    }
    menuButton.addEventListener('click', openRightSideMenu)
    rightsideMenuCloseButton.addEventListener('click', closeRightSideMenu)
   
}
function setSlider(){
    const buttons = document.querySelectorAll('[data-slider-button]')
    for(let btn of buttons){
        btn.addEventListener('click', ()=>{
            
        })
    }
}