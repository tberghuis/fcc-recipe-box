import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
//import { observer } from 'mobx-react';
//import { Link } from 'react-router';

@inject("appState") @observer
class Recipe extends Component {

    render() {

        let r = this.props.appState.recipes.filter((recipe) => {
            return (this.props.params.id === recipe.id);
        });


        if (r.length < 1) {
            return <div>invalid id</div>
        }
        let recipe = r[0];

        return (
            <div class="recipe-details">
                <div>Recipe Details</div>
                <div>{recipe.title}</div>
                <div class="c1">
                    <div><img src={recipe.image} /></div>
                    <div>
                        <div>ingredients</div>
                        <div>{recipe.ingredients.map((ingredient) => {
                            return <div>{ingredient}</div>;
                        })}</div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Recipe;
