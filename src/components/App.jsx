import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import RecipeList from './RecipeList.jsx';
import Service from '../Services.js';

@inject("appState") @observer
class App extends Component {

    constructor(props) {
        super(props);
        // read article on promises
        Service.getInitialRecipes().then((recipes)=>{
            //this.props.appState.recipes = recipes;
            console.log(recipes);
            this.props.appState.recipes.replace(recipes);
        });
    }

    render() {
        return (
            <div class="root">
                <h1 class="title">FCC Recipe Box</h1>
                {this.props.children}
            </div>
        );
    }

};

export default App;
