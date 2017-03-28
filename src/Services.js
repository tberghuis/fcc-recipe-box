import axios from 'axios';

export default {
    getInitialRecipes() {
        return new Promise((resolve, reject) => {
            let r = JSON.parse(localStorage.getItem("recipes"));
            console.log("r", r);
            if (r) {
                resolve(r);
                // i believe this function will exit
                // debug to confirm???
                // it didn't so i obviously don't understand promises fully.
                return;
            }
            axios.get('/data/initial.json').then((response) => {
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
    },
    resetRecipes() {
        return new Promise((resolve, reject) => {
            axios.get('/data/initial.json').then((response) => {
                localStorage.setItem("recipes", JSON.stringify(response.data.recipes));
                resolve(response.data.recipes);
            });
        });
    }
};