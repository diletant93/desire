export default function setSendingEmail(){
    const form = document.querySelector('.footer__form')
    const emailInput = document.querySelector('.footer__form-input')
    const projectUrl = "http://127.0.0.1:8000/test/"
   
    form.addEventListener('submit',async function(e){
        e.preventDefault()
        console.log('we are here')
        const email = emailInput.value
        console.log(projectUrl +`sendemail/${email}/`)
    
        console.log(email)
        try{
            const response = await fetch(projectUrl +`sendemail/${email}/`)
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            console.log(result)
            console.log('did it')
            alert('The email was sent')
        }catch(error){
            console.log(error)
        }
    })
}