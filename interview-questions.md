# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would you use the method `super()`?

  Your answer: The super() lets us call out to the parent function/method.

  Researched answer: When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.



2. What is the DOM? What is the virtual DOM?

  Your answer: Something to do with the computers connection to the internet?

  Researched answer: The HTML DOM (Document Object Model)
When a web page is loaded, the browser creates a Document Object Model of the page.
- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.



3. What is a higher-order function?

  Your answer: A higher order function is a function that uses .map() and .filter() to condense the code, and make it easier to use, instead of for loops. 

  Researched answer: In a nutshell, a Higher-order function is a function that may receive a function as an argument and can even return a function. Higher-order functions are just like regular functions with an added ability of receiving and returning other functions are arguments and output.



4. What is JSX?

  Your answer: JavaScript run in html through react.

  Researched answer: It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. We will explore rendering them to the DOM in the next section. Below, you can find the basics of JSX necessary to get you started.



5. What is React?

  Your answer: React is a pre built app that allows small chunks of code to be built and then put together piece by piece.

  Researched answer: React is an open-source JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.



6. What is yarn? What file(s) are updated when you run `$ yarn`?

  Your answer: yarn is the pre made assests stored inside of React. You get all the files updated that are inside the basic update, both in src and file.

  Researched answer: Yarn is a new package manager that replaces the existing workflow for the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably.



7. What is localhost:3000? How do we use localhost:3000 in the development process?

  Your answer: it is a preinstalled html page that lets us run our React application in real time, though it is not connected to the internet.

  Researched answer: localhost is a network address that points to your own computer. Navigating to localhost:3000 in your web browser sends a request to the Rails development server running locally on port 3000. However, this only works if your web browser is running on the same computer as the development server.



8. What is an iterable in JavaScript? What data types are iterables? How can this information useful to you as a developer?

  Your answer: I honestly do not know what this is and had to look it up.

  Researched answer: The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for...of construct. Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map , while other types (such as Object ) are not. 
  - They would be helpful because it is less code to type and more efficiant?



9. STRETCH: What is hoisting in JavaScript?

  Your answer: Creating a function that can have multiple functions inside it?

  Researched answer: Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted. Any assignments are left where they are. Therefore, our second example IIFE actually translates to the following code.



10. STRETCH: What are closures in JavaScript?

  Your answer: Is it the end of your JavaScript that closes out the info and sends it all to the html or app?

  Researched answer: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). ... In JavaScript, closures are created every time a function is created, at function creation time.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- React state
- React props
- React lifecycle methods
- API
- e.preventDefault()
- DOM events
