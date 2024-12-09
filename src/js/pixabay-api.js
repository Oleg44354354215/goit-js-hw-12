import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function getPicture(query){
    const key = '47415256-2dfc8fe63cf3afc0ab872a04e';
    return fetch(`https://pixabay.com/api/?q=${query}&image_type=photo&orientation=horizontal&safesearch=true&key=${key}`)
    .then(response=> {
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    })
}

