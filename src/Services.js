// imports
import axios from 'axios';

export default {
    getInitialRecipes() {

        return new Promise((resolve, reject) => {

            //localstorage
            let r = localStorage.getItem('recipes');
            if (r) {
                resolve(r);
                // i believe this function will exit
                // debug to confirm???
            }
            console.log("here");
            

            // else

            // how to get base url
            // lets hard code...
            // since i am using router
            // dont share subdomain with other apps

            axios.get('/data/initial.json').then((response) => {
                console.log("response",response);
                //resolve(response);
                resolve(response.data.recipes);
            });
        });


    }
};