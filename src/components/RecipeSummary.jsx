import React, { Component } from 'react';
//import { observer, inject } from 'mobx-react';
import { observer } from 'mobx-react';
import { Link } from 'react-router'

@observer
class RecipeSummary extends Component {

    render() {
        const recipeStyle = {
            backgroundImage: 'url(' + this.props.recipe.image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: 300,
            height: 300
        };

        return (
            <Link to={"/recipe/" + this.props.recipe.id}>
                <div style={recipeStyle} class="recipe">
                    <h2 class="title">{this.props.recipe.title}</h2>
                </div>
            </Link>
        );
    }

};

export default RecipeSummary;
