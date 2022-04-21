import { IInputAction } from "../actions/IInputAction";


const initialState = {
    description: ""
}

const InputReducer = (state = initialState, action:IInputAction) => {
    switch(action.type){
        case "input":
            return {...state, description: action.value} ;
        case "reset":
            return {...state, description: ""} ;
        default:
            return state;
    }
}

export default InputReducer;