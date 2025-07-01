import { createStore } from "vuex";
import counterModule from "./modules/counter";

export default createStore({
    modules:{
       count: counterModule
    },
    state() {
        return {
            appTitle:'Vuex Working'
        }
    },
    getters: {
        upperCaseTitle(state) {
            return state.appTitle.toLocaleUpperCase();
        }
    }
})