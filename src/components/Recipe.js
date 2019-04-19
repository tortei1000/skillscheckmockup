import React, {Component} from "react";

export default class Recipe extends Component {
  


  render(){
    
    let {recipeDisplay} = this.props
    if (recipeDisplay.length > 0){
    console.log(this.props.recipeDisplay[0].ingredients)}
    let individualRecipe = recipeDisplay.map((recipe)=>{
      return (
        <div>
          <h1>{recipe.title}</h1>
          <h3>{recipe.ingredients}</h3>
          <h3>{recipe.directions}</h3>
          <img src={recipe.image_url} />
        </div>
        
        
      )
      })
    
       
    return(
      <div>
        {individualRecipe}
      </div>
    )

  }
}