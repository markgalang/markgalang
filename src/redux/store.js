import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import SkillsReducer from "./reducers/skillReducer";
import ExperienceReducer from "./reducers/experienceReducer";
import ProjectReducer from "./reducers/projectReducer";

const initialState = {};
const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  skills: SkillsReducer,
  projects: ProjectReducer,
  experience: ExperienceReducer,
});

const Store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

export default Store;
