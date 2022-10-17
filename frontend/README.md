# Task Manager MEAN Stack Web App
A Spotify Data Visualization app [frontend] using React, Node.js to visualize music listened to over the year.


## Project Purpose
The motives behind this are as follow:
 -  
 - Able to have my own simple to do list app to use, to gain inspiration from and continue  devloping new things
 - Establish best practices, good mvc architecture and extera seperations of concerns
 - Have super clean code to show recruiters/interviewers in the future

## Author
**Sefath Chowdhury / Sakif Chowdhury** 

## Built With
* [React](https://angularjs.org/) - The front-end framework used
* [Mongo](https://docs.mongodb.com/manual/) - Mongo DB database
* [NODE](https://nodejs.org/en/) - JavaScript runtime for server and has a package manager (NPM)  
* [SpringBoot](https://spring.io/) - Stand Alone Web Framework
* [Kotlin] ()

## Tools Used
As of July 7th, 2020, the technologies, softwares, and applications used to facilitate this project are as follows:
 - Github (version control)
 - Visual Studio Code (code editor)


------
------
------
------
------
------

## DevNotes
*I'm working on a Mac*
But to get started: 
1. I'm using 
- React 18.2.0
- Node v18.7.0

To view the frontend:
```
- clone the repo 
- cd into the frontend directory 
- run npm install (this will install all the dependencies form package.json , you don't have to do anything else)
- npm start
- you should see the frontend displayed on localhost:3000

```

2. Firstly made some space on my workbench with a new directory
```
cd /Documents/Projects/<repoName>
```
3. Then used
```
npx create-react-app frontend 
```
4. Directory Structure: frontend directory hold the following (see below). Public holds the index.js file which contains the `<div id='root'></div>` which is the root element that contains all of React. The rest of the code source focused on developing the frontend UI is found in the `src` directory which contains Components (navbar, cards, buttons, forms, etc) each component is styled within its component file using styled-components library.   Finaly a pages dorectory which builds out each page using the components.
```
.
└── frontend
    ├── public
    ├── node_modules
    └── src
        ├── Components
        └── Pages
```

5. For react components I will be making the following:
 - OAuth login-button 
 - ViewTopArtists Card
 - ViewTopSongs Card
 - View<otherMiscData> Card
    - hours listened
    - new songs discovered
    - new songs liked
    - etc

6. We have two pages for now. Login Page. Data Visuals page. 

