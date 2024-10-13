export default function setRightsideMenu(){
    const menuButton = document.querySelector('.header__button')
    const rightsideMenu = document.querySelector('.rightside-menu')
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