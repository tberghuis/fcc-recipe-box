import {
  observable
} from 'mobx';
//import { observable, computed } from 'mobx';

class AppState {

  @observable recipes = [];

}

export default AppState;