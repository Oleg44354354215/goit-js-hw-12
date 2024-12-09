"use strict"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import {getPicture} from "./js/pixabay-api";
import  {gallery,clear}  from "./js/render-api";

const putting = document.querySelector(".form-js");
const front = document.querySelector(".loader")

putting.addEventListener("submit",Hadlecick);

function Hadlecick(e){
    e.preventDefault();

    const query = e.target.elements.query.value.trim();
    if (!query) {
        iziToast.error({ message: "Please enter a correct query" });
        return;
    }

    clear();
    front.classList.remove("hidden");

    getPicture(query)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.info({ message: "No images found" });
                return;
            }
            gallery(data.hits);
        })
        .catch((error) => {
            iziToast.error({ message: "Error fetching images. Please try again." });
        })
        .finally(() => {
            front.classList.add("hidden");
        });

}


