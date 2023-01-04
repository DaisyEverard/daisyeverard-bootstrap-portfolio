# week3-challenge-bootstrap-portfolio

## Link to live site

https://daisyeverard.github.io/daisyeverard-bootstrap-portfolio/

## Preview

<p align="center">
  <img src="./images/preview.png" width="500" alt="screenshot of site">
</p>

## Description

A portfolio created using bootstrap to display and link to other projects I have completed. This was created as a resource for job searching to show employers what I have created in a collated and interactive way.

## Sitemap

1. Jumbotron with navbar, header, and profile picture.
2. 'Work' section utilising Bootstrap grid to make a responsive layout with cards linking to other portfolio projects.
3. 'skills' section talking about skills I have learned, what else I'm learning now and in the future, and my goals. 
4. 'About Me' and 'Contacts' sections with some information about me and an email, Linked In, and GitHub links. The email is not a link, but is set to user-select: all; for ease of copying. 
5. Footer with copyright declaration

## Issues and Solutions

#### 1. Navbar not displaying properly on small screen. 

The `#about-contact` section contains `#about` and `#contacts` which display inline on larger screens, but are on seperate rows on a small screen. Both `#about` and `#contacts` have a height of 400px. The #about-contact section also had a height of 400px so, when the sections were on different lines, they were taller than their container and the footer was at the bottom of this smaller container, not at the bottom of the visible content. 
Solution was to remove `height: 400px;` from `#about-contacts`

For different situations, one option would be to make a fixed footer that always displays at the bottom of the screen with:
`footer {  position:fixed;  left:0px;  bottom:0px;  height:XXpx;  width:100%;  }`

#### 2. Horizontal scroll

Current Solution: set `.row { margin-right: 0px !important; }`
The margin set by bootstrap on the rows was causing overflow. To override bootstrap the !important tag was necessary. 

 Other solutions tried:
 - make all containers fluid-contiainers
 - set max-width for images
 - always set flex-wrap: wrap; 
 - change all fluid-containers to regular containers
 - set row `max-width:100%; `made it smaller than screen
 - set `.fluid-container { overflow-x: hidden; }`

 #### 3. Images not loading in live version
 
 Capitalisation of images and image folder not consistent.
  After changing file names GitHub repo didn't change them so had to remove, push, restore, and push again to reflect changes. 

 ## Acknowledgements

 Background images from unsplash.com
 Placeholder images from EdX
