# HEX Colors Project
Simple app for adding and filtering colors in hex format, made for intership

## Content
* [Technologies](#technologies)
* [Setup](#setup)
* [How To Use](#how-to-use)

## Technologies
* Typescript (4.9.5)
* React (18.3.1)
* SASS (1.79.4)
Project created only using Typescript React

## Setup
To run project, you have to have Node (v.21.6.2)
Install it locally, then, in your folder with files open terminal with administration permissions and use node to install dependencies and start project:

```
$ npm install
$ npm start
```

## How to use?
Simply type your HEX code into input above, then add it.
Notice, that if hex code isn't valid, you can't click add button.
If you want to filter your colors, click on `Filter` button to toggle filter options, then use slider to configure it.
All your custom colors are saved in local storage. You can delete individual color by clicking it's `X` button, or you can clear all your local storage by clicking `Reset Local Storage` button. Be carefull - if you click it, it can't be undone.
