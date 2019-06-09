import React from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';

function App() {
  return (
   <React.Fragment>
     <RecipeList />
     <RecipeDetails />
   </React.Fragment>
  );
}

export default App;
