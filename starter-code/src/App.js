import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Food from './Food';
import foods from './foods.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container  columns">
          <div className="app-col column is-half">
            <h1 className="app-heading title column  is-half">IronNutrition</h1>
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
        </div>
      </div>
    );
  }
}

export default App;
