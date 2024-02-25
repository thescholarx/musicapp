
// Import the data from data.js
import playlist from './data.js';

// Fetch the template from cardtemplate.html
fetch('cardtemplate.html')
    .then(response => response.text())
    .then(template => {
        // Loop through each song
        playlist.forEach(song => {
            // Create a new DOM element from the template
            const card = document.createElement('div');
            // adding class to the card
            card.classList.add('cards');
            card.innerHTML = template;
            // Update the content with song data
            card.querySelector('.cards h4').textContent = song.title;
            card.querySelector('img').src = song.image;
            card.querySelector('img').alt = song.title;
            card.querySelector('.tag h3').textContent = song.creator;
            card.querySelector('.tag p').textContent = song.mood;

            // Get the play button element
            const playButton = card.querySelector('.play');

            // Add event listener to the play button
            playButton.addEventListener('click', function() {
                // Call the play function with the song ID
                play(song.id);
            });

            // Append the card to the container
            document.querySelector('.card-row').appendChild(card);
        });
    });

// Play function to handle play button click
function play(songId) {
    alert('Play button clicked for song ID: ' + songId);
}




