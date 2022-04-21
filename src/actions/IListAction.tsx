import { IIngredient } from "../interfaces/IIngredient";


export interface IListAction {
    type: 'remove' | 'add' | 'edit',
    value: IIngredient;
}