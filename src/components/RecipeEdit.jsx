import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { Link } from 'react-router';

@inject("appState") @observer
class RecipeEdit extends Component {

    render() {
        // console.log(this.props.params.id);

        let recipe = this.props.appState.getRecipe(this.props.params.id);

        if(!recipe){
            return <div>Loading...</div>;
        }

        return (
            <div class="recipe-edit">
                <div class="title">Recipe Edit</div>
                <div class="c2">
                    <div class="c3">
                        <div class="c1"></div>
                        <button class="button">Delete</button>
                    </div>
                    <div class="c3">
                        <div class="c1">Title: </div>
                        <input class="input" type="text"/>
                    </div>
                    <div class="c3">
                        <div class="c1">Ingredients: </div>
                        <input class="input" type="text"/>
                    </div>
                    <div class="c3">
                        <div class="c1"></div>
                        <input class="input" type="text"/>
                    </div>
                    <div class="c3">
                        <div class="c1"></div>
                        <input class="input" type="text"/>
                    </div>
                </div>
                {recipe.title}
            </div>
        );
    }

};

export default RecipeEdit;
