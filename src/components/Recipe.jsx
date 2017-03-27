import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { observable } from 'mobx';

import Service from '../Services.js';

//@inject("appState") @observer
@observer
class Recipe extends Component {
    @observable recipe;

    constructor(props) {
        super(props);

        console.log(this.props.params.id);
        Service.getRecipe(this.props.params.id).then((recipe) => {
            this.recipe = recipe;
            //this.recipe = JSON.parse(JSON.stringify(recipe));
            // this.render();
        });
    }


    render() {

        // let recipe = this.props.appState.getRecipe(this.props.params.id);
        if (!this.recipe) {
            return <div>Loading</div>
        }
        let recipe = this.recipe;

        return (
            <div class="recipe-details">
                <div>Recipe Details</div><br />
                <div class="title">{recipe.title}</div>
                <div class="c1">
                    <div><img src={recipe.image} /></div>
                    <div>
                        <div class="title">Ingredients</div>
                        <div>{recipe.ingredients.map((ingredient, i) => {
                            return <div key={i}>{ingredient}</div>;
                        })}</div>
                    </div>
                </div>
                <Link to={"/recipe/" + recipe.id + "/edit"} class="button">Edit</Link>
            </div>
        );
    }

};

export default Recipe;
