import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { Link } from 'react-router';
import { observable } from 'mobx';

import Service from '../Services.js';

@inject("appState") @observer
class RecipeEdit extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    @observable recipe = null;

    constructor(props) {
        super(props);

        // instead of this i could have checked appstate
        // then done this
        // this works so leave it as this way until i come across
        // a better pattern. maybe redux?
        // get this done and move on
        Service.getRecipe(this.props.params.id).then((recipe) => {
            //this.props.appState.recipes.replace(recipes);
            // dont make local changes persist
            this.recipe = JSON.parse(JSON.stringify(recipe));
        });
    }

    handleTitleChange = (event) => {
        this.recipe.title = event.target.value;
    }

    handleImageChange = (event) => {
        this.recipe.image = event.target.value;
    }


    handleIngredientChange = (event, index) => {
        //this.recipe.title = event.target.value;
        this.recipe.ingredients[index] = event.target.value;
    }

    addIngredient = () => {
        //this.recipe.title = event.target.value;
        this.recipe.ingredients.push("");
    }

    deleteRecipe = () => {
        this.props.appState.deleteRecipe(this.recipe.id);
        this.context.router.push("/");
    }
    viewRecipe = () => {
        this.context.router.push("/recipe/" + this.recipe.id);
    }

    handleSave = () => {
        // validation
        // or button should be disabled if invalid

        //mobx replace array
        this.props.appState.saveRecipe(this.recipe);
    }

    //array.splice(index, 1);
    handleRemoveIngredient = (index) => {
        this.recipe.ingredients.splice(index, 1);
    }

    render() {
        if (!this.recipe) {
            return <div>Loading...</div>;
        }

        return (
            <div class="recipe-edit">
                <div class="title">Recipe Edit</div>
                <div class="c2">
                    <div class="c3">
                        <div class="c1">Title: </div>
                        <input
                            onChange={this.handleTitleChange}
                            value={this.recipe.title} class="input" type="text" />
                    </div>
                    <div key="0" class="c3">
                        <div class="c1">Ingredients: </div>
                        <input
                            value={this.recipe.ingredients[0]}
                            onChange={(event) => {
                                this.handleIngredientChange(event, 0)
                            }}
                            class="input" type="text" />
                    </div>
                    {this.recipe.ingredients.slice(1).map((ingredient, i) => {
                        return (
                            <div key={i + 1} class="c3">
                                <div class="c1"></div>
                                <input
                                    onChange={(event) => {
                                        this.handleIngredientChange(event, i + 1)
                                    }}
                                    value={ingredient}
                                    class="input" type="text" />
                                <button
                                    onClick={() => {
                                        this.handleRemoveIngredient(i + 1)
                                    }}
                                    class="button">X</button>
                            </div>
                        );
                    })}
                    <div class="c3">
                        <div class="c1"></div>
                        <button
                            class="button"
                            onClick={this.addIngredient}
                        >Add Ingredient</button>
                    </div>
                    <div class="c3">
                        <div class="c1">Image URL: </div>
                        <input
                            onChange={this.handleImageChange}
                            value={this.recipe.image} class="input" type="text" />
                    </div>
                    <div class="c3">
                        <div class="c1"></div>
                        <button
                            class="button"
                            onClick={this.handleSave}
                        >Save</button>
                        <button
                            onClick={this.deleteRecipe}
                            class="button">Delete</button>
                        <button
                            onClick={this.viewRecipe}
                            class="button"
                        >View Recipe</button>
                    </div>
                </div>
            </div>
        );
    }

};

export default RecipeEdit;
