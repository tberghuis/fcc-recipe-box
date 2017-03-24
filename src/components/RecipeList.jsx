import React, { Component } from 'react';
//import { observer } from 'mobx-react';
//import { observable } from 'mobx';

//@observer
class RecipeList extends Component {

    // gets recipes from props


    render() {
        return (
            <div>
                { this.props.recipes.map((recipe)=>{
                    return <div>{recipe.title}</div>;
                }) }
            </div>
        );
    }

};

export default RecipeList;
