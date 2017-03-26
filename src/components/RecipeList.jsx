import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import RecipeSummary from './RecipeSummary.jsx';

@inject("appState") @observer
class RecipeList extends Component {
    static contextTypes = {
        router: React.PropTypes.object
    };

    addRecipe = () => {
        console.log("add recipe");
    }

    render() {
        return (
            <div>
                <button onClick={this.addRecipe} class="button">Add Recipe</button>
                <h2 class="title">All Recipes</h2>
                { /* TODO add key prop... */}
                {this.props.appState.recipes.map((recipe) => {
                    //return <div>{recipe.title}</div>;

                    return <RecipeSummary 
                        key={recipe.id}
                        recipe={recipe}></RecipeSummary>;
                })}
            </div>
        );
    }

};

export default RecipeList;
