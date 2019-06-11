import React, { Component } from 'react';


export default class Recipe extends Component {
  render() {
    const{
      image_url,
      title,
      source_url,
      publisher, 
      recipe_id
    } = this.props.recipe;
    
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img src={image_url} 
            className="img-card-top"
            style={{height:"14rem"}}
            alt="recipes"/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
