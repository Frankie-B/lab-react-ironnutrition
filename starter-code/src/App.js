import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Food from './Food';
import foods from './foods.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        {foods.map((food) => {
          return (
            <Food
              image={food.image}
              name={food.name}
              calories={food.calories}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
