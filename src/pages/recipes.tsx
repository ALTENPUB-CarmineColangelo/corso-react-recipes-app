import React, {useEffect, useMemo, useState} from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import { IRecipesAction } from "../actions/IRecipesAction";
import RecipeComponent from "../components/RecipeComponent/RecipeComponent";
import { IRecipeDetails } from "../interfaces/IRecipeDetails";
import { rootReducer, RootState } from "../reducers";
import store from "../store";
import {getIngredients} from "../services/RecipesService";

/**
 * TODO TASK
 * Tre video su useMemo, useCallback, useReducer
 *
 * @see useMemo - https://www.youtube.com/watch?v=THL1OPn72vo
 *
 * @see useCallback - https://www.youtube.com/watch?v=_AyFP5s69N4
 *
 * @see useReducer - https://www.youtube.com/watch?v=kK_Wqx3RnHk
 *
 * @todo provare a usare useMemo o useReducer per mostrare una lista diversa in base al tipo di sort selezionato
 *
 */
const Recipes = () => {
  const ingrList = useSelector((state: RootState) => state.listReducer.ingrList);

  const [list, setList] = useState<IRecipeDetails[]>([]);

  let navigate = useNavigate();
  // const recListClone:IRecipeDetails[] = [];
  // recList.forEach((val: IRecipeDetails) => recListClone.push(Object.assign({}, val)));

  const getIngs = async () => {
    const ingredientiDaApi = await getIngredients(ingrList);
    console.log(ingredientiDaApi.data);
    setList(ingredientiDaApi.data);
    debugger
  }

  useEffect(() => {
    if (ingrList.length > 0) {
      getIngs();
    }
  }, [ingrList])

  // const sortByTime = () => {
  //   console.log(recList);
  //   const sortedRec = recListClone.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
  //   const action : IRecipesAction={
  //     type: "replaceRecipes",
  //     value: sortedRec
  //   };
  //   store.dispatch(action);
  //   console.log(recList);
  // }
  //
  // const sortByMissed = () => {
  //   console.log(recList);
  //   const sortedRec = recListClone.sort((a, b) => a.missedIngredientCount - b.missedIngredientCount);
  //   const action : IRecipesAction={
  //     type: "replaceRecipes",
  //     value: sortedRec
  //   };
  //   store.dispatch(action);
  //   console.log(recList);
  // }


  // const recListClone:IRecipeDetails[] = useMemo(() => {
  //
  // }, []);
  return <div>
    <button onClick={()=> navigate("/")}>Back</button>
    {/*<button onClick={()=> sortByTime()}>Tempo</button>*/}
    {/*<button onClick={()=> sortByMissed()}>Meno ingredienti mancanti</button>*/}
    {list.map((recipe: IRecipeDetails) => {
        return <RecipeComponent recipe={recipe} key={recipe.id} />;
      })}
  </div>;
};

export default Recipes;
