import setRightsideMenu from "./index.js";
import setSendingEmail from "./api.js";

export default async function loadHtml(elementid, filepath){
    fetch(filepath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById(elementid).innerHTML = data

        switch(elementid){
            case 'header':
                setRightsideMenu();
                break;
            case 'footer':
                setSendingEmail();
                break;
            
        }
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}


