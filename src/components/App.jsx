import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import RecipeList from './RecipeList.jsx';

//@inject("appState") @observer
@observer
class App extends Component {

    render() {
        return (
            <div class="app">
                <h1 class="title">FCC Recipe Box</h1>
                {this.props.children}
            </div>
        );
    }

};

export default App;
