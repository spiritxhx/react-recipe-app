import React, { Component } from 'react';
import { recipe } from '../tempDetails';

export default class RecipeDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe:{}, 
      url: `https://www.food2fork.com/api/get?key=c3ddee385c6ce3caeb5ea9d600b07913&rId=35382`
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hello from Details</h1>
      </React.Fragment>
    )
  }
}
