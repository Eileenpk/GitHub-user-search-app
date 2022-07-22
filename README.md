# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences.

### Screenshot

![](./screenshot.jpg)

![screen shot of full screen webpage](https://github.com/Eileenpk/GitHub-user-search-app/blob/main/assets/website%20screenshot.png)
![screen shot of mobile webpage](https://github.com/Eileenpk/GitHub-user-search-app/blob/main/assets/moblie%20screenshot.png)


### Links

- Solution URL: [GitHub](https://github.com/Eileenpk/GitHub-user-search-app)
- Live Site URL: [live site](https://eileenpk.github.io/GitHub-user-search-app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- vanilla JS
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned that you can use the || operator in template literals to display the null values differently

```js
  <a href="http://twitter.com/${data.twitter_username}">${data.twitter_username || 
    `<div class='not-aval'>Not Available</div>`
    }</a>
```


## Author

- Frontend Mentor - [@Eileenpk](https://www.frontendmentor.io/profile/Eileenpk)

