import Bio from './modules/bio/Bio.js'
import { addBioEventListeners, addPfpEventListeners } from './modules/bio/events.js'
import Gallery from './modules/gallery/Gallery.js'
import { addGalleryEventListeners, addImagesToGallery } from './modules/gallery/events.js'
import Nav from './modules/nav/Nav.js'
import { request, addEntryToDb, getEntryFromDb } from './database.js'
import loadFollowButton from './modules/bio/FollowButton.js'

const App = async () => {
    return `
      ${Nav()}
      <div class="container">
          ${await Bio()}
          ${Gallery()}
      </div>
    `
}

request.onsuccess = async () => {
    document.getElementById('root').innerHTML = await App();
    addBioEventListeners();
    addGalleryEventListeners();
    addImagesToGallery();
    loadFollowButton();
    addPfpEventListeners();
}

request.onerror = () => {
    console.log('fail');
}