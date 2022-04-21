import { IRecipesAction } from "../actions/IRecipesAction";
import { IRecipeDetails } from "../interfaces/IRecipeDetails";

interface IList {
    recList: IRecipeDetails[] 
}


const recInitialState:IList = {
    recList: []
}



const RecipesReducer = (state = recInitialState, action:IRecipesAction) => {
    switch(action.type){
        case "replaceRecipes":
            return {...state, recList: [...state.recList, ...action.value]};
        case "remove":
            return {...state, recList: []};
        default:
            return state;
    }
}

export default RecipesReducer;