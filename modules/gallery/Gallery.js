const Gallery = () => { 
    return `
    <input type="file" name="photo" id="photoInput">
    <label for="photoInput">
        <i class="add-photo fa-regular fa-square-plus"></i>
    </label>
    <div class="gallery-nav"></div>
    <section class="gallery">
        <div class="gallery-loader">
            <img src="../../assets/galleryLoader.svg" alt="">
        </div> 
    </section>
    `
}

export default Gallery;