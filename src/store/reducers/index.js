import { combineReducers } from "redux";
import visitorReducer from "./visitor.reducer";
const rootReducer = combineReducers({
  visitors: visitorReducer
});

export default rootReducer;
