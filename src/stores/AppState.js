import {
  observable
} from 'mobx';

class AppState {
  // probably should have written recipes as an object
  // access like recipes[id]
  @observable recipes = [];

  saveRecipe = (recipe) => {
    let i = this.getRecipeIndex(recipe.id);
    this.recipes[i] = recipe;
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  cleanRecipeList = () => {
    this.recipes.replace(this.recipes.filter((r) => {
      console.log(r);
      return r.title.trim() !== "";
    }));
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  addRecipe = (recipe) => {
    this.recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  deleteRecipe = (id) => {
    let i = this.getRecipeIndex(id);
    // do i have to assign
    // this.recipes = this.recipes.splice(i,1);
    this.recipes.splice(i, 1);
    localStorage.setItem("recipes", JSON.stringify(this.recipes));
  }

  getRecipeIndex = (id) => {
    for (let i = 0; i < this.recipes.length; i++) {
      if (id == this.recipes[i].id) {
        return i;
      }
    }
  }
}

export default AppState;