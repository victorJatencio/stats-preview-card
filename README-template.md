# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Links

- Solution URL: [Add solution URL here](https://dazzling-noyce-e02e7e.netlify.app/)
- Live Site URL: [Add live site URL here](https://dazzling-noyce-e02e7e.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- ReactBootstrap - CSS library

### What I learned

This was a quick dive in to React and how to combine it with a css library such as Bootstrap in order to build fast web interfaces.

To see how you can add code snippets, see below:

```js - This is how I created the card as a component
import React from "react";
import { Row } from "react-bootstrap";
import "./Card.css";

const Card = () => {
  return (
    <Row>
      <div className="card">
        <div className="text__content">
          <h1>
            Get <span className="highlight">insights</span> that help your
            business grow.
          </h1>
          <p className="blurb__text">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <ul className="list">
            <li>
              <h4>10k+</h4>
              <span className="stats">companies</span>
            </li>
            <li>
              <h4>314</h4>
              <span className="stats">templates</span>
            </li>
            <li>
              <h4>12m+</h4>
              <span className="stats">queries</span>
            </li>
          </ul>
        </div>
        <div className="image">{/*...*/}</div>
      </div>
    </Row>
  );
};

export default Card;
```

```js - This is how I'm using the card component on the application
import "./App.css";
import { Container } from "react-bootstrap";
import Card from "./components/Card";

function App() {
  return (
    <Container className="App">
      <Card />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/">Victor J Atencio</a>.
      </div>
    </Container>
  );
}

export default App;
```

### Continued development

This is the first of many other project I'm planing to do with React.js and my main focus is to learn this Java Script library in order to buil much more complex applications. This first app is not all that fancy, but is a start!

### Useful resources

- [ReactBootstrap](https://react-bootstrap.github.io/) - This helped me to quickly build the interface. It is a css library, great for fast development.

## Author

- Website - [Victor Atencio](https://dazzling-noyce-e02e7e.netlify.app/)
- Frontend Mentor - [@victorJatencio](https://www.frontendmentor.io/profile/victorJatencio)
