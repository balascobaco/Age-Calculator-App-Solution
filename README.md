# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q).

Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
    ![Desktop](<solution/Desktop Version.png>)
    ![Error State 01](<solution/Error State 01.png>)
    ![Error State 02](<solution/Error State 02.png>)
    ![Mobile](<solution/Mobile Version.png>)
    ![Desktop Results](<solution/Results Desktop.png>)
    ![Mobile Results](<solution/Results Mobile.png>)


### Links

- Solution URL: 
- Live Site URL: 

## My process

Started at first with my HTML and CSS, once those were covered, the biggest challange was to create my Javascript code, after this it took numerous tests to make sure I got it right.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I consider working with dates in Javascript to be always a challange. It demanded a lot of research and reading to make sure I got it right. 

Here's some jscode I'm really proud of:

if (emptyFields.length > 0) {
    emptyFields.forEach((field) => {
      var errorMessage;
      switch (field) {
        case "day":
          errorMessage = errorDay;
          changeStyle("day-input", "day-title", "red");
          break;
        case "month":
          errorMessage = errorMonth;
          changeStyle("month-input", "month-title", "red");
          break;
        case "year":
          errorMessage = errorYear;
          changeStyle("year-input", "year-title", "red");
          break;
      }
      errorMessage.textContent = "This field is required";
    });
    return;
  }

### Continued development

This is one of my firsts attempts in front end development, it seems I have a long way to go, especially learning some Javascript libraries, which I should be focusing for now on/


## Author

- Github - [Gabriel Balasco](https://github.com/balascobaco)
- Frontend Mentor - [@balascobaco](https://www.frontendmentor.io/profile/balascobaco)