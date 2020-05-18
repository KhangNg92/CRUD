import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
  todos
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
