import {combineReducers} from "redux";
import {searchCityReducer, updateBGReducer} from "./searchCityReducer";

const allReducers = combineReducers({
    searchCity: searchCityReducer,
    updateBG: updateBGReducer,
})

export default allReducers