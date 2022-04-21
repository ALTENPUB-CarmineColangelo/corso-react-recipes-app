import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { IIngredient } from "../interfaces/IIngredient";
import { randResponse } from "./searchByIngredientResponse";
import {
  IIngredientDetail,
  IRecipeDetails,
} from "../interfaces/IRecipeDetails";
import store from "../store";
import { IRecipesAction } from "../actions/IRecipesAction";

export interface IRecipeEssentials {
  id: number,
  missedIngredientCount: number
}

//Rajani
//const apikey = "aa1e43ccc6a84361bae03a0dd937a2a8";
//Torchia
//const apikey = "aff3f0e5579248cd825b1cd7c763e02a";
//temp1
const apikey = "fffd71acc5524c46925f900d68a69a57";

//`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=${translateToString(list)}`

export const getIngredients = async (list: IIngredient[]): Promise<{ data: IRecipeDetails[] }> => {
  const ingredientsString = list.map(ing => ing.value).join(',+');
  return await axios
      .get(
          `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&number=10&ingredients=${ingredientsString}&ranking=2`
      );
}

const RecipesService = (list: IIngredient[]) => {


  const translateToString = () => {
    let rst: string = list[0].value;
    for (let i = 1; i < list.length; i++) {
      rst = rst.concat(`,+${list[i].value}`);
    }
    return rst;
  };

  async function makeGetRequest() {
    const firstRes: IRecipeEssentials[] = []
    await axios
    //CAMBIA PARAMETRO NUMBER PER AVERE TUTTE LE RICETTE
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&number=10&ingredients=${translateToString()}&ranking=2`
      )
      .then((res) => {
        res.data.map((item: IRecipeEssentials) => {
          const recipe:IRecipeEssentials = {
            id: item.id,
            missedIngredientCount: item.missedIngredientCount
          }
          firstRes.push(recipe);
        });
      });

    getRecipesDetails(firstRes);
  }


  const cutDescription = (desc: string) => {
    if(desc === null){
      return ""
    }
    const reg = /\<.*?\>/gm;
    return desc.replace(reg,"")
  };

  async function getRecipesDetails(firstRes: IRecipeEssentials[]) {
    const recipes: IRecipeDetails[] = [];
    for (let i of firstRes) {
      await axios
        .get(
          `https://api.spoonacular.com/recipes/${i.id}/information?apiKey=${apikey}&includeNutrition=false)`
        )
        .then((res) => {
          const ingredients: IIngredientDetail[] = [];

          res.data.extendedIngredients.map((exIngs: IIngredientDetail) => {
            const extendedIngredient: IIngredientDetail = {
              id: exIngs.id,
              name: exIngs.name,
              measures: exIngs.measures,
            };
            ingredients.push(extendedIngredient);
          });

          const recipe: IRecipeDetails = {
            vegetarian: res.data.vegetarian,
            vegan: res.data.vegan,
            glutenFree: res.data.glutenFree,
            dairyFree: res.data.dairyFree,
            pricePerServing: res.data.pricePerServing,
            extendedIngredients: ingredients,
            id: res.data.id,
            title: res.data.title,
            readyInMinutes: res.data.readyInMinutes,
            servings: res.data.servings,
            image: res.data.image,
            instructions: cutDescription(res.data.instructions),
            missedIngredientCount: i.missedIngredientCount
          };
          recipes.push(recipe);       
        });
    }
    const action : IRecipesAction={
      type: "replaceRecipes",
      value: recipes
    };
    store.dispatch(action);
  }

  return makeGetRequest();
};

export default RecipesService;
