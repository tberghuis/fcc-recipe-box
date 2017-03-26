import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';

@inject("appState") @observer
class Recipe extends Component {

    render() {

        // must be a more effective way than this
        let r = this.props.appState.recipes.filter((recipe) => {
            return (this.props.params.id === recipe.id);
        });


        if (r.length < 1) {
            return <div>invalid id</div>
        }
        let recipe = r[0];

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
