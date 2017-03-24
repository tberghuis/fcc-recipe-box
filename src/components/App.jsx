import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class App extends Component {


    @observable recipes = [];

    constructor(props) {
        super(props);

        // load recipes

        // local storage

        // if null load initial.json

        // get base url from router

    }

    render() {
        return (
            <div>
                hello world
            </div>
        );
    }

};

export default App;
