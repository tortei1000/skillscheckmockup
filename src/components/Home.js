import React, { Component } from "react";
import axios from "axios";
import Recipe from "./Recipe";


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      recipeDisplay: []
    }
  }

  componentDidMount() {
    axios.get("/api/recipes").then((res) => {
      
      this.setState({
        recipeDisplay: res.data
      })
    }).catch(err => console.log("error", err))
  }

 

  render() {
    return (
      <div>
        <Recipe recipeDisplay={this.state.recipeDisplay} />
      </div>
    )
  }
}