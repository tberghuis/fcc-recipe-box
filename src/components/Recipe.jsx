import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
//import { observer } from 'mobx-react';
//import { Link } from 'react-router';

@inject("appState") @observer
class Recipe extends Component {

    render() {
        
        return (
            <div>hello world</div>
        );
    }

};

export default Recipe;
