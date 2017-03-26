import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';

@inject("appState") @observer
class Recipe extends Component {

    render() {

        let recipe = this.props.appState.getRecipe(this.props.params.id);
        if (!recipe) {
             return <div>invalid id</div>
        }

        return (
            <div class="recipe-details">
                <div>Recipe Details</div><br/>
                <div class="title">{recipe.title}</div>
                <div class="c1">
                    <div><img src={recipe.image} /></div>
                    <div>
                        <div class="title">Ingredients</div>
                        <div>{recipe.ingredients.map((ingredient,i) => {
                            return <div key={i}>{ingredient}</div>;
                        })}</div>
                    </div>
                </div>
                <Link to={"/recipe/"+recipe.id+"/edit"} class="button">Edit</Link>
            </div>
        );
    }

};

export default Recipe;
