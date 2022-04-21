export interface IRecipeDetails {
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    pricePerServing: number,
    extendedIngredients: IIngredientDetail[],
    id: number,
    title: string,
    readyInMinutes: number,
    servings: number,
    image: string,
    instructions: string
    missedIngredientCount: number
}

export interface IIngredientDetail{
    id: number,
    name: string,
    measures: IMeasure
}


interface IMeasure {
    us: IMeasureDetail,
    metric: IMeasureDetail,
}

interface IMeasureDetail {
    amount: number,
    unitShort: string
}