function setRightsideMenu(){
    const menuButton = document.querySelector('.header__button')
    const rightsideMenu = document.querySelector('.rightside-menu')
    const rightsideMenuCloseButton = document.querySelector('.rightside-menu__close')
    
    console.log(menuButton)
    console.log(rightsideMenu)
    console.log(rightsideMenuCloseButton)
    function openRightSideMenu(){
        rightsideMenu.classList.remove('rightside-menu--closed')
    }
    function closeRightSideMenu(){
        rightsideMenu.classList.add('rightside-menu--closed')
    }
    menuButton.addEventListener('click', openRightSideMenu)
    rightsideMenuCloseButton.addEventListener('click', closeRightSideMenu)

}
async function loadHtml(elementid, filepath){
    fetch(filepath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        console.log(data)
        document.getElementById(elementid).innerHTML = data
        setRightsideMenu()
        
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

// loadHtml('header','htmlComponents/header.html')