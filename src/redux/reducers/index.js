import {combineReducers} from 'redux'

import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartsReducer from "./carts";

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    carts: cartsReducer
});

export default rootReducer;
