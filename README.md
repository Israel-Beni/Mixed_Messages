
# Mixed Messages - (Inspirational Quotes Generator)

> **Mixed Messages** is an ES8 JavaScript program that helps to generate inspirational quotes. It randomly generates a new quote and output the quote every single time that the user runs it.

## Table of Contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Inspiration](#inspiration)

### General info

This program uses `Type.fit API`, a free quotes API. It takes the **response** (that is an array of quotes and authors) from this API and randomly choose one quote to display to the user each time the user runs the program.

### Technologies

* JavaScript 2017 (ES8)
* Node.js 14.15.4
* Babel Transpiler 6.14.10 (for browser compatibility)
* JSDOM 6.14.10
* [Type.fit API](https://type.fit/api/quotes) (Free Quotes API)

### Setup

* Clone this repository to your desktop and run `npm install` command to install all the dependencies.
* Run `npm install node-fetch` in order to use the AJAX `fetch()` function to request data form `Type.fit` API.
* Run `npm i jsdom` to install JSDOM in order to interact with DOM.

### Inspiration

 The project is inspired and guided by Codecademy.
