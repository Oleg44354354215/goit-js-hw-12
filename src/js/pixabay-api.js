'use strict';
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

// export function getPicture(query) {
//   const key = '47415256-2dfc8fe63cf3afc0ab872a04e';
//   return fetch(
//     `https://pixabay.com/api/?q=${query}&image_type=photo&orientation=horizontal&safesearch=true&key=${key}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// }

export async function getPicture(query, page = 1, perPage = 15) {
  const key = '47415256-2dfc8fe63cf3afc0ab872a04e';
  const link = `https://pixabay.com/api/`;
  const url = `${link}?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const result = await axios.get(url);
    return result.data;
  } catch (error) {
    console.log('Error fetching pictures:', error.message);
  }
}
