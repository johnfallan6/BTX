import { combineReducers } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

const configureStore = combineReducers({
  auth: authReducer,
  posts: postReducer,
});

export default configureStore;
