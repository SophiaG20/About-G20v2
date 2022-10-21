'use strict'

let userName = prompt('What is your name future friend?');
console.log('asking the user for their name');
alert('Hello ' + userName + ' I am going to ask you a few questions so you can get to know me some!! about me. Please answer with yes or no or y or n');

let score = 0;

let answer1 = prompt('Do I go by G20').toLowerCase();
console.log('First Question: asking the user if I go by G20');
if (answer1 === 'yes' || answer1 === 'y') {
    alert('Correct! I do go by G20');
    score++;
    } else if (answer1 === 'no' || answer1 === 'n');
    