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


        //this.props.appState = getI
        Service.getInitialRecipes().then((recipes)=>{
            this.props.appState.recipes = recipes;
        });

        // load recipes

        // local storage
        let r = localStorage.getItem('recipes');
        console.log(r);

        if (!r) {
            /*
            axios.get('/user?ID=12345')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
*/
        }

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
