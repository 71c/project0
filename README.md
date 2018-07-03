# Project 0

Web Programming with Python and JavaScript

## about
This is my website. Info in the desciptions of the files.

## files
All of the `.html` pages have the same sidebar on them so one can get from any page directly to any other page. The descriptions of the html pages refer to what’s on the right of the sidebar.
* `images/`
    * `Ap_Creative_Stock_Header.jpg`: image used in the fake news article in `alojaco_news.html`
    * `buttons.jpg`: image used in the slideshow in `images.html`
    * `gray_streaks.jpg`: image used in the slideshow in `mages.html`
    * `SUPER 2 copy 2.png`: image used in the slideshow in `images.html`
* `styles/`
    * `style.css`: the stylesheet that styles all of the pages on the site.
    * `style.css.map`: some type of generated file that SASS made.
    * `style.scss`: the SCSS file I used to write the styles that was compiled to `style.css`. It has inheritance, variables, and nesting. It also has a mobile-responsive @media query that makes the menu smaller below a certain threshold for the screen’s width in pixels. I am disappointed with it because it doesn’t take into account pixel density, which it should to function well.
* `about_me.html`: Just two social media links, as well as a menu that was awkwardly added so I could make use of SCSS inheritance.
* `alojaco_news.html`: has 3 columns of text for layout purposes using Bootstrap’s grid model. Also has the stock image mentioned above.
* `game.html`: holds `snake.js`. The game can’t be played on mobile.
* `images.html`: uses Bootstrap’s [Carousel](https://getbootstrap.com/docs/4.1/components/carousel/) component to make a slideshow of images with controls.
* `index.html`: Nothing on it except a "welcome" message and instructions on how to use the website.
* `projects.html`: There was going to be pictures or writing about "projects" that Alojaco has done but I ended up just putting a table (4 actually; it’s a nested table) there to satisfy the requirement for a table.
* `README.md`: Includes a short writeup describing my project, what’s contained in each file, and (optionally) any other additional information the staff should know about my project.
* `snake.js`: a simple snake game made with [p5.js](https://p5js.org/). I made the same game in [Processing](https://processing.org/) a while ago and then decided to put it on my webpage by converting it to p5.js.
