import { observable } from 'mobx';

//import { observable, computed } from 'mobx';
//import axios from 'axios';

class AppState {

  @observable recipes = [];

}

export default AppState;
