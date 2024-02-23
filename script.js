document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    const apiUrl = 'https://api.unsplash.com/search/photos?per_page=9&query=developer&client_id=xQ8y6p2Id5ZiqlC1xaomAE3EGEC_EVL0pY9Sxh1hYwY';

    const gallery = document.querySelector('.gallery');

    function fetchImage() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(result => {
                    const image = document.createElement('img');
                    image.src = result.urls.regular;
                    image.alt = result.description;
                    gallery.appendChild(image);
                });
            })
            .catch(error => console.error(error));
    }

    fetchImage();
});
