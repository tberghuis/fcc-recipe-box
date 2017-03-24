import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
//import { observable } from 'mobx';
//import axios from 'axios';

import RecipeList from './RecipeList.jsx';
import Service from '../Services.js';

@inject("appState") @observer
class App extends Component {


   // @observable recipes = [];

    constructor(props) {
        super(props);


        // read article on promises
        Service.getInitialRecipes().then((recipes)=>{
            //this.props.appState.recipes = recipes;
            console.log(recipes);
            this.props.appState.recipes.replace(recipes);
        });



        // if null load initial.json

        // get base url from router

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

};

export default App;
