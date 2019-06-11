import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

class App extends Component {
  state = {
    recipes: [], 
    url: "https://www.food2fork.com/api/search?key=c3ddee385c6ce3caeb5ea9d600b07913"
  };

  async getRecipes(){
    const data = await fetch(this.state.url);
    const jsonData = await data.json();

    
  }

  render() {
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment >
    )
  };
}

export default App;
