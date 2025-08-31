# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Challenges](#challenges)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### Screenshot

![Screenshot of News homepage solution](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML5 / JSX
- Tailwind css
- Flexbox / Grid layout
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Challenges

> Problem: footer component touching the bottom edge of the screen.

- **solution**:- i added padding bottom on last children of footer component for mobile view and make it zero on desktop view.

> Problem: clicking on child div closes the menu.

- **solution**:- i used portal to create menu for mobile view and used onclick prop to close menu but used it on parent so its div child also behaving same so i used stop stopPropagation on onclick event of child div.

> Problem: having scroll effect when menu modal was open i wanted to disable scroll when menu is open

- **solution**:- i used useEffect hook to set overflow style when modal is open or close to disable scrolling.
