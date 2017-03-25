import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import RecipeSummary from './RecipeSummary.jsx';

@inject("appState") @observer
class RecipeList extends Component {

    render() {
        return (
            <div>
                <h2 class="title">All Recipes</h2>
                { /* TODO add key prop... */}
                { this.props.appState.recipes.map((recipe)=>{
                    //return <div>{recipe.title}</div>;

                    return <RecipeSummary recipe={recipe}></RecipeSummary>;
                }) }
            </div>
        );
    }

};

export default RecipeList;
