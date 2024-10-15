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
function setSliderDots(slider) {
    const buttons = document.querySelector('.slider-dots');
    const sliderItems = slider.querySelector('[data-slider-items]')

    for (let i = 0; i < sliderItems.children.length; i++) { // Ensure to loop over children, not just the length of the items array
        const button = document.createElement('button');
        button.classList.add('slider-dot');
        buttons.append(button);
    }
    buttons.children[0].classList.add('slider-dot--active')
    let interval = window.setInterval(()=>{
        slide(slider)
    }, 3000)
    for (let i = 0; i < sliderItems.children.length; i++) {
        buttons.children[i].addEventListener('click', function (e) {
            buttons.querySelector('.slider-dot--active').classList.remove('slider-dot--active')
            delete sliderItems.querySelector('[data-slider-active]').dataset.sliderActive // Remove active from the currently active slide
            sliderItems.children[i].dataset.sliderActive = true // Set active on the clicked slide
            buttons.children[i].classList.add('slider-dot--active')
            window.clearInterval(interval)
            interval = window.setInterval(()=>{
                slide(slider)
            }, 3000)
        });
    }
    return buttons;
}   
function slide(slider){
    const buttons = slider.querySelector('[data-slider-navigation]')
    const sliderItems = slider.querySelector('[data-slider-items]')
  
    const activeSlide = sliderItems.querySelector('[data-slider-active]')
    const activeDot = buttons.querySelector('.slider-dot--active')
    
    let newIndex = [...sliderItems.children].indexOf(activeSlide) + 1

    delete activeSlide.dataset.sliderActive;
    activeDot.classList.remove('slider-dot--active')

    if(newIndex >= sliderItems.children.length){
        newIndex = 0
    }

    buttons.children[newIndex].classList.add('slider-dot--active')
    sliderItems.children[newIndex].dataset.sliderActive = true
}
function setSlider(slider) {
    slider.append(setSliderDots(slider));   
}

// Now you can pass the elements as arguments
const slider = document.querySelector('[data-slider]');
setSlider(slider);