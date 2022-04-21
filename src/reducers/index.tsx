import InputReducer from "./InputReducer";
import ListReducer from "./ListReducer";
import { combineReducers } from "redux";
import RecipesReducer from "./RecipesReducer";
import DetailReducer from "./DetailReducer";

export const rootReducer = combineReducers({
    inputReducer: InputReducer,
    listReducer: ListReducer,
    recipesReducer : RecipesReducer,
    detailReducer: DetailReducer
});

export type RootState = ReturnType<typeof rootReducer>;
