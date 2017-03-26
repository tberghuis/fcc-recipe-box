import {
  observable
} from 'mobx';
//import { observable, computed } from 'mobx';

class AppState {

  @observable recipes = [];


  getRecipe = (id) => {

    // console.log(id, this.recipes);
    

    // could use find to be more efficient
    let r = this.recipes.filter((recipe) => {
      return (id === recipe.id);
    });


    if (r.length < 1) {
      return null;
    }
    // i could throw an exception if length was more than 1.



    return r[0];

  }

}

export default AppState;