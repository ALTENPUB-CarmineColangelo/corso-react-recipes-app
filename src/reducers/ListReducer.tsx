import { IListAction } from "../actions/IListAction";
import { IIngredient } from "../interfaces/IIngredient";


interface IList {
    ingrList: IIngredient[] 
}


const ingrInitialState:IList = {
    ingrList: []
}

const ListReducer = (state = ingrInitialState, action: IListAction) => {
    switch(action.type){
        case "add":
            return {...state, ingrList: [...state.ingrList, action.value]};
        case "remove":
            return {...state, ingrList: state.ingrList.filter((todo:IIngredient) => todo.id != action.value.id)};
        case "edit":
            console.log(action);
            return {
                ...state,
                ingrList: state.ingrList.map(ingredient => {
                    if (ingredient.id === action.value.id) {
                        ingredient = action.value
                    }
                    return ingredient
                })
            }
        default:
            return state;
    }
}

export default ListReducer;