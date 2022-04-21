import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DetailIngredientComponent from '../components/DetailIngredientComponent/DetailIngredientComponent';
import { IIngredientDetail, IRecipeDetails } from '../interfaces/IRecipeDetails'
import { RootState } from '../reducers';

const RecipesDetail = () => {

  const recipe = useSelector((state: RootState) => state.detailReducer.recipe);
  let navigate = useNavigate();

  return (
    <div>
      <button onClick={()=> navigate("/recipes")}>Back</button>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title}/>
      <h3>Ingredients:</h3>
      {recipe.extendedIngredients.map((ingredient: IIngredientDetail)=>{
        return <DetailIngredientComponent ingr={ingredient} key={ingredient.id}/>
      })}
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  )
}

export default RecipesDetail