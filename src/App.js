import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import { findByDisplayValue } from '@testing-library/dom';
import AddFood from './AddFood';
import Search from './Search';
import OneFoodToday from "./OneFoodToday";

const allFoods= foods;

class App extends Component{
state = {
  food: allFoods,
  showAddForm: true,
  searchedFood: '',
  todayFoods : [],
  totalCalories: 0
}


addTheFood = (infos) => {
  const clone = [...this.state.food];
  clone.push(infos);
  this.setState({
    food: clone,
    showAddForm: !this.state.showAddForm
  });
};


searchTheFood = (input) => {
  this.setState ({
    searchedFood: input,
  })
}

toggleAddForm = () => {
  this.setState( {
    showAddForm: !this.state.showAddForm
  })
}

addTodayFood =(quantity, name, calories) => {
  const totalCalories = quantity * calories;
  const newObject= {
    quantity: quantity,
    name: name,
    calories: totalCalories
  }
  this.setState( {
    todayFoods: [...this.state.todayFoods, newObject],
    totalCalories: this.state.totalCalories + totalCalories
  })
}

  render () {
    let filteredFood = null
    if(this.state.searchedFood !== '') {
      filteredFood = this.state.food.filter((food) => food.name.toUpperCase().includes(this.state.searchedFood.toUpperCase()));
    } else {
      filteredFood = [...this.state.food]
    }
    console.log(filteredFood)
    return (
    <div className="App">
    <Search handler={this.searchTheFood}/>
    <div id="main">

    
    <button onClick={() => this.toggleAddForm()}>Add new food</button>
    {this.state.showAddForm ? "" : <AddFood handler={this.addTheFood}/>}
    

    <div id="food-container" >
    
    {filteredFood.map((food, i) => {
      return (
        <FoodBox img={food.image} name={food.name} calories={food.calories} quantity={food.quantity} handler={this.addTodayFood}></FoodBox>
      )
    })
    }
    </div>
    <div id="today-food">
      <p>Today's foods</p>

      {this.state.todayFoods.map((food, i) => {
      return (
        <OneFoodToday quantity={food.quantity} name={food.name} calories={food.calories}/>
      )
    })
    }
    <p>Total : {this.state.totalCalories} cal</p>
    </div>
    </div>
    </div>
  );
  }
}

export default App;
