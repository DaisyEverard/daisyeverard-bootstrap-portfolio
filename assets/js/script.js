const card11 = document.querySelector('#card-1-1');
const card21 = document.querySelector('#card-2-1');
const card22 = document.querySelector('#card-2-2');
const card31 = document.querySelector('#card-3-1');
const card32 = document.querySelector('#card-3-2');
const card33 = document.querySelector('#card-3-3');

const card11Img = card11.parentElement.querySelector('.image-container');
const card21Img = card21.parentElement.querySelector('.image-container');
const card22Img = card22.parentElement.querySelector('.image-container');
const card31Img = card31.parentElement.querySelector('.image-container');
const card32Img = card32.parentElement.querySelector('.image-container');
const card33Img = card33.parentElement.querySelector('.image-container');

// card-1-1
card11.querySelector('.card-title').textContent = 'Cocktail Search'; 
card11.querySelector('.card-text').textContent = 'Get cocktail recipes based on a name, ingredient, or category'; 
card11.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Cocktail-Search/'); 
card11Img.setAttribute('alt', '3 cocktails on a wooden bar')
card11Img.style.backgroundImage = "url(./assets/images/three-cocktails.jpg)";

// card-2-1
card21.querySelector('.card-title').textContent = 'Weather Dashboard'; 
card21.querySelector('.card-text').textContent = 'Get todays weather and a 5 day forecast for any city'; 
card21.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Weather-Dashboard/'); 
card21Img.setAttribute('alt', 'black and white cloudy sky with person')
card21Img.style.backgroundImage = "url(./assets/images/bw-clouds.jpg)"; 

// card-2-2
card22.querySelector('.card-title').textContent = 'Team Profile Generator'; 
card22.querySelector('.card-text').textContent = 'Node.js HTML profile page generator'; 
card22.querySelector('a').setAttribute('href', 'https://github.com/DaisyEverard/Team-Profile-Generator'); 
card22Img.setAttribute('alt', '5 people with hands in circle')
card22Img.style.backgroundImage = "url(./assets/images/team-hands.jpg)"; 

// card-3-1
card31.querySelector('.card-title').textContent = 'Skittles Scores'; 
card31.querySelector('.card-text').textContent = 'App for skittles teams to automatically calculate points'; 
card31.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Skittles-Scores/'); 
card31Img.setAttribute('alt', 'Wooden bowling pins')
card31Img.style.backgroundImage = "url(./assets/images/skittles.jpg)";  

// card-3-2
card32.querySelector('.card-title').textContent = 'Day Planner'; 
card32.querySelector('.card-text').textContent = 'Event planner for 9-5 hour timeblocks'; 
card32.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Work-Day-Planner/'); 
card32Img.setAttribute('alt', 'pile of notebooks')
card32Img.style.backgroundImage = "url(./assets/images/notebooks.jpg)"; 

// card-3-3
card33.querySelector('.card-title').textContent = 'Travel Site'; 
card33.querySelector('.card-text').textContent = 'A Travel site who organize tours around Ireland'; 
card33.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Travel-Ireland/'); 
card33Img.setAttribute('alt', 'Cliffs of Moher')
card33Img.style.backgroundImage = "url(./assets/images/travel-ireland.jpg)"; 
