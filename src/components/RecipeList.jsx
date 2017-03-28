import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
const uuid = require('uuid/v4');

import RecipeSummary from './RecipeSummary.jsx';
import Service from '../Services.js';

@inject("appState") @observer
class RecipeList extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        // delete recipe with empty titles?
        // i know this is bad sln
        // really need to redesign, maybe learning redux will help me make better design choices
        this.props.appState.cleanRecipeList();
    }

    addRecipe = () => {
        let recipe = {};
        recipe.id = uuid();
        recipe.title = "";
        recipe.ingredients = [""];
        recipe.image = "";
        this.props.appState.addRecipe(recipe);
        this.context.router.push('/recipe/' + recipe.id + '/edit');
    }

    resetRecipes = () => {
        Service.resetRecipes().then((recipes) => {
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
