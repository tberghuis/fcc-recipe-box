import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("appState") @observer
class RecipeList extends Component {

    render() {
        return (
            <div>
                { /* TODO add key prop... */}
                { this.props.appState.recipes.map((recipe)=>{
                    return <div>{recipe.title}</div>;
                }) }
            </div>
        );
    }

};

export default RecipeList;
