import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import Food from './components/Food';
import List from './components/List';

class App extends Component {
  state = {
    foods: foods,
  };

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <h1 className="app-heading title column has-text-left">
            IronNutrition
          </h1>
        </div>
        <div className="app-lists">
          <div className="app-list">
            {this.state.foods.map((food, index) => (
              <Food
                key={index}
                index={index}
                name={food.name}
                calories={food.calories}
                image={food.image}
              />
            ))}
          </div>
          <List />
        </div>
      </div>
    );
  }
}

export default App;
