import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { Link } from 'react-router';

@inject("appState") @observer
class RecipeEdit extends Component {

    render() {
        console.log('params id');

        return (
            <div class="recipe-edit">
                hello world
            </div>
        );
    }

};

export default RecipeEdit;
