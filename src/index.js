console.log('%c HI', 'color: firebrick')

// src/index.js

document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-images');
            data.message.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = 'Random dog image';
                img.style.width = '200px'; // Optional: for better display
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            window.allBreeds = breeds; // Store for filtering
            renderBreeds(breeds); // Initial render
        })
        .catch(error => console.error('Error fetching breeds:', error));

    // Challenge 4: Add filter functionality
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', (e) => {
        const selectedLetter = e.target.value;
        const filteredBreeds = window.allBreeds.filter(breed => 
            breed.startsWith(selectedLetter)
        );
        renderBreeds(filteredBreeds);
    });
});

// Challenge 3: Render breeds with click functionality
function renderBreeds(breeds) {
    const breedList = document.getElementById('dog-breeds');
    breedList.innerHTML = ''; // Clear existing list
    
    breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        
        // Add click event to change color
        li.addEventListener('click', () => {
            li.style.color = 'firebrick'; // You can choose any color
        });
        
        breedList.appendChild(li);
    });
}