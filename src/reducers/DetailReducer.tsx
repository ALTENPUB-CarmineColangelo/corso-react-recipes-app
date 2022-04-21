import { IDetailAction } from "../actions/IDetailAction";
import { IRecipeDetails } from "../interfaces/IRecipeDetails";


interface IDetailReducer {
    recipe: IRecipeDetails
}

const recipe:IRecipeDetails = {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    pricePerServing: 0,
    extendedIngredients: [],
    id: 0,
    title: "",
    readyInMinutes: 0,
    servings: 0,
    image: "",
    instructions: "",
    missedIngredientCount: 0
}

const initialStateDet:IDetailReducer = {
    recipe: recipe
}

const DetailReducer = (state = initialStateDet, action:IDetailAction) => {
    switch(action.type){
        case "replaceDetail":
            return {...state, recipe: action.value} ;
        case "resetDetail":
            return {...state, recipe: recipe} ;
        default:
            return state;
    }
}

export default DetailReducer;