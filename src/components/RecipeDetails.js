import React, { Component } from 'react';
import { recipe } from '../tempDetails';

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: recipe,
      url: `https://www.food2fork.com/api/get?key=c3ddee385c6ce3caeb5ea9d600b07913&rId=${this.props.id}`
    }
  }
  render() {
    const { image_url, publisher_url, source_url, title, ingredients } = this.state.recipe;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button type="button" className="btn btn-warning mb-5 text-capitalize">
                back to recipe list
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe"/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
