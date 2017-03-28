// i should delete this class.
// no need for global state in this app.

import {
  observable,
  toJS
} from 'mobx';

// import {
//   createModelSchema, primitive, reference, list, object, identifier, serialize, deserialize
// } from "serializr";

// import {
//    serialize
// } from "serializr";
//import { observable, computed } from 'mobx';

class AppState {

  // probably should have written recipes as an object
  // access like recipes[id]

  @observable recipes = [];


  saveRecipe = (recipe) => {
    let i = this.getRecipeIndex(recipe.id);
    this.recipes[i] = recipe;

    //let r = JSON.parse(JSON.stringify(this.recipes));

    localStorage.setItem("recipes", JSON.stringify(this.recipes));


    // console.log(i, recipe);

    // console.log(this.recipes);
    // console.log(toJS(this.recipes));


  }



  deleteRecipe = (id) => {
    let i = this.getRecipeIndex(id);

    // do i have to assign
    // this.recipes = this.recipes.splice(i,1);
    this.recipes.splice(i,1);
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  getRecipeIndex = (id) => {

    console.log("id", id);

    for (let i = 0; i < this.recipes.length; i++) {
      if (id == this.recipes[i].id) {
        return i;
      }
    }

  }
}

export default AppState;