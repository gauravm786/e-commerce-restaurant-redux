import { createStore } from "redux";
import rootReducer from "./redux/reducers/rootReducers";

const store = createStore(rootReducer)
export default store