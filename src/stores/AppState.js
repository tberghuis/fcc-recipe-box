
// i should delete this class.
// no need for global state in this app.

import {
  observable
} from 'mobx';
//import { observable, computed } from 'mobx';

class AppState {

  @observable recipes = [];

}

export default AppState;