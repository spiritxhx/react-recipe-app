import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=c3ddee385c6ce3caeb5ea9d600b07913", 
    details_id: 35384
  };

  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();

  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // componentDidMount(){
  //   this.getRecipes()
  // }

  render() {
    return (
      <React.Fragment>
        {/* <RecipeList recipes={this.state.recipes} /> */}
        <RecipeDetails id={this.state.details_id} />
      </React.Fragment >
    )
  };
}

export default App;
