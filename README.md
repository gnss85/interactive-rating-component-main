# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./src/assets/images/screenshots/desktop_hover_state_rating.png)
![](./src/assets/images/screenshots/desktop_rating.png)
![](./src/assets/images/screenshots/desktop_thanks.png)
![](./src/assets/images/screenshots/mobile_rating.png)
![](./src/assets/images/screenshots/mobile_thanks.png)

### Links

- Solution URL: [solution URL](https://interactive-rating-component-pr.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```css
gap: calc(
  ((var(--rating-width) - (var(--padding) * 2)) - (var(--circle-diameter) * 5)) /
    4
);
```

## Author

- Git - [gnss85](https://github.com/gnss85)
- Frontend Mentor - [@gnss85](https://www.frontendmentor.io/profile/gnss85)
