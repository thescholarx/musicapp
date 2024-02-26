// Define the create function
function create(data, sectionId) {
    data.forEach(res => {
        // Create a new DOM element from the template
        const card = document.createElement('div');
        // adding class to the card
        card.classList.add('cards');
        card.innerHTML = template;
        // Update the content with res data
        card.querySelector('.cards h4').textContent = res.title;
        card.querySelector('img').src = res.image;
        card.querySelector('img').alt = res.title;
        card.querySelector('.tag h3').textContent = res.creator;
        card.querySelector('.tag p').textContent = res.mood;

        // Get the play button element
        const playButton = card.querySelector('.play');

        // Add event listener to the play button
        playButton.addEventListener('click', function() {
            // Call the play function with the res ID
            play(res.id);
        });

        // Append the card to the container
        document.querySelector(sectionId).appendChild(card);
    });
}
// Play function to handle play button click
function play(resId) {
    alert('Play button clicked for res ID: ' + resId);
}

// Import the data from data.js
import { playlist, playlist2 } from './data.js';

// Fetch the template from cardtemplate.html
let template;
fetch('cardtemplate.html')
    .then(response => response.text())
    .then(str => {
        // Store the template
        template = str;
        // Loop through each res
        create(playlist, '#featured');
        create(playlist2, '#recentlyAdded');
    });

