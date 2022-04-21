import { IRecipeDetails } from "../interfaces/IRecipeDetails";


export interface IRecipesAction {
    type: string,
    value: IRecipeDetails[];
}