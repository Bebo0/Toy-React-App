import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Using JavaScript function
function Hello() {
  return <h1>Hello World</h1>
}

// Using ES6 class
class Helloo extends React.Component {
  render() { // this method shows and updates the rendered output of the compononent
    return <h1>Hello World</h1>
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {symbol: '', price: 0}
  }

  componentDidMount() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=QB9SD121KOFA8PR7')
    .then(response => response.json())
    .then(responseData => {
      //const myObj = {foo : responseData['Meta Data']['3. Last Refreshed']};
     const TIME_NOW = ''+responseData['Meta Data']['3. Last Refreshed'];
      this.setState({
        symbol: responseData['Meta Data']['2. Symbol'],
        price: responseData['Time Series (5min)'][TIME_NOW]['1. open']
      })
    })
    .catch(err => console.error(err));
  }






  render() {
    return (
      <div>
        <h1>Symbol: {this.state.symbol}</h1>
        <h2>Price: ${this.state.price}</h2>
        
      </div>
    );
  }
}

export default App;

// how to import default and named exports:
// import React from 'react' // Import default value
// import { Component } from 'react' // Import named value

// the exports look like this:
// export default React // Default export
// export {Component} // Named export

// Constants:
// const PI = 3.14159;
// Consts are block-scoped (between {}) unless the const is an object or array
// const myObj = {foo : 3};
// myObj.foo = 5 // this is ok

// Arrow Functions (compact functions like lambda):
// function hello(greeting){
//  return greeting;
//}
// is equivalent to:
// const hello = greeting => { greeting }
// hello('Hello World'); // returns Hello World

// ex.2 
// const calcSum = (x, y) => { x + y }
// () => { ... }

// Template literals (string allowing embedded expressions)
// also useful to concatenate strings:
// NEED TO USE ` instead of '

// var person = {firstName: 'John', lastName: 'Johnson'};
// var greeting = `Hello ${person.firstName} ${person.lastName}`;

// Classes and inheritance:
// similar to languages like Java. Class can have fields, constructors, and methods.
// class Person {
//   constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }  
// }
// class Employee extends Person {
//   constructor(firstName, lastName, title, salary) {
//       super(firstName, lastName);
//       this.title= title;
//       this.salary = salary;
//   }  
// }

// JSX and styling:
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello World {this.props.user}</h1>;
//   }
// }

// <Hello count={2+2} />
// <div style={{height: 20, width: 200}}>
  // Hello
  // </div>

// Props and state:
// props and state are the input data for rendering the compononent.
// Both props and state are actually JavaScript objects, and the component is re-rendered when props or state are changing.







