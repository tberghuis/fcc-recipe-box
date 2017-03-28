import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import RecipeSummary from './RecipeSummary.jsx';
import Service from '../Services.js';

@inject("appState") @observer
class RecipeList extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };



    addRecipe = () => {
        console.log("add recipe");
    }

    resetRecipes = () => {
        Service.resetRecipes().then((recipes)=>{
            this.props.appState.recipes.replace(recipes);
        });
    }


    render() {
        return (
            <div class="recipe-list">
                <button onClick={this.resetRecipes} class="button">Reset Recipes</button>
                <button onClick={this.addRecipe} class="button">Add Recipe</button>
                <h2 class="title">All Recipes</h2>
                {this.props.appState.recipes.map((recipe) => {
                    return <RecipeSummary
                        key={recipe.id}
                        recipe={recipe}></RecipeSummary>;
                })}
            </div>
        );
    }

};

export default RecipeList;
