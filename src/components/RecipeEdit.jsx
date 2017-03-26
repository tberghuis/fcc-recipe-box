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
                {recipe.title}
            </div>
        );
    }

};

export default RecipeEdit;
