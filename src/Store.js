import { applyMiddleware, createStore } from "redux";

import userReducer from "./userReducer";
import {thunk} from "redux-thunk"
const Store = createStore(userReducer,
    applyMiddleware(thunk)
);

export default Store;