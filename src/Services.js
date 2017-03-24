// imports
import axios from 'axios';

export default {
    getInitialRecipes() {

        return new Promise((resolve, reject) => {

            //localstorage
            let r = JSON.parse(localStorage.getItem("recipes"));
            
            console.log("r",r);
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

                // need to save
                localStorage.setItem("recipes", JSON.stringify(response.data.recipes));

                resolve(response.data.recipes);
            });
        });


    }
};
