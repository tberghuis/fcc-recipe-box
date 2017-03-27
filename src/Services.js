// imports
import axios from 'axios';

export default {
    getInitialRecipes() {
        return new Promise((resolve, reject) => {
            //localstorage
            let r = JSON.parse(localStorage.getItem("recipes"));
            console.log("r", r);
            if (r) {
                resolve(r);
                // i believe this function will exit
                // debug to confirm???
            }
            console.log("here");

            axios.get('/data/initial.json').then((response) => {
                //console.log("response",response);

                // need to save
                localStorage.setItem("recipes", JSON.stringify(response.data.recipes));

                resolve(response.data.recipes);
            });
        });
    },
    getRecipe(id) {
        return new Promise((resolve, reject) => {
            this.getInitialRecipes().then((recipes) => {
                // could use find to be more efficient
                let r = recipes.filter((recipe) => {
                    return (id === recipe.id);
                });
                if (r.length < 1) {
                    resolve(null);
                }
                resolve(r[0]);
            });
        });
    }
};