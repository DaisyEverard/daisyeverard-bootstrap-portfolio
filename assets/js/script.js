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
card11.querySelector('.card-title').textContent = 'Day Planner'; 
card11.querySelector('.card-text').textContent = 'Event planner for 9-5 hour timeblocks'; 
card11.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Work-Day-Planner/'); 
card11Img.setAttribute('alt', 'pile of notebooks')
card11Img.style.backgroundImage = "url(./assets/images/notebooks.jpg)"; 

// card-2-1
card21.querySelector('.card-title').textContent = 'Code Quiz'; 
card21.querySelector('.card-text').textContent = 'Quiz about code that stores the top 3 scores'; 
card21.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Code-Quiz/'); 
card21Img.setAttribute('alt', 'alt-here')
card21Img.style.backgroundImage = "url(./assets/images/quiz-bg.jpg)"; 

// card-2-2
card22.querySelector('.card-title').textContent = 'Password Generator'; 
card22.querySelector('.card-text').textContent = 'Custom random password generator'; 
card22.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Password-Generator/'); 
card22Img.setAttribute('alt', 'alt-here')
card22Img.style.backgroundImage = "url(./assets/images/password-bg.jpg)"; 

// card-3-1
card31.querySelector('.card-title').textContent = 'JS Financial Analysis'; 
card31.querySelector('.card-text').textContent = 'Uses the console and Javscript to analyse a set of financial data'; 
card31.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/console-financial-analysis/'); 
card31Img.setAttribute('alt', 'Dark computer screen with analysis')
card31Img.style.backgroundImage = "url(./assets/images/financial-bg.jpg)"; 

// card-3-2
card32.querySelector('.card-title').textContent = 'JS Rock Paper Scissors'; 
card32.querySelector('.card-text').textContent = 'A game of rock, paper, scissors where a user plays the computer. Built with JavaScript'; 
card32.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/rockPaperScissors-JSonly/'); 
card32Img.setAttribute('alt', 'Hand Throwing Rock')
card32Img.style.backgroundImage = "url(./assets/images/rps-bg.jpg)"; 

// card-3-3
card33.querySelector('.card-title').textContent = 'Travel Site'; 
card33.querySelector('.card-text').textContent = 'A Travel site who organize tours around Ireland'; 
card33.querySelector('a').setAttribute('href', 'https://daisyeverard.github.io/Travel-Ireland/'); 
card33Img.setAttribute('alt', 'Cliffs of Moher')
card33Img.style.backgroundImage = "url(./assets/images/travel-ireland.jpg)"; 
