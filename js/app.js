// Function to fetch random images from Unsplash Source API
async function fetchRandomImages() {
        try {
            const response = await fetch('https://source.unsplash.com/random');
            return response.url;
        } catch (error) {
            console.error('Error fetching images:', error);
            return null;
        }
    
    
}

// Function to display images on the webpage
async function displayImages() {
    const mainContainer = document.getElementById("mainContainer");
    for (let i = 0;  i<4; i++){
    const imageUrl = await fetchRandomImages();
    if (imageUrl) {
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        mainContainer.appendChild(imageElement);
}
    }
}

// Display a new random image on page load
displayImages()

// function to scroll Infinity in a page
function scrollInfinty(){

    if(window.innerHeight +window.scrollY >=document.body.offsetHeight){
        displayImages()
    }
}


window.addEventListener('scroll',scrollInfinty);