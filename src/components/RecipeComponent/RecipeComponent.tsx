import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IDetailAction } from '../../actions/IDetailAction';
import { IRecipeDetails } from '../../interfaces/IRecipeDetails';
import store from '../../store';

interface IRecipeComponent {
  recipe: IRecipeDetails
}

const RecipeComponent = (props: IRecipeComponent) => {

  let navigate = useNavigate();

  const callDetails = () => {
    const action: IDetailAction = {
      type: "replaceDetail",
      value: props.recipe
    }
    store.dispatch(action);
    navigate('/recipes-detail');
  }

  return (
    <div>
      <img src={props.recipe.image} alt={props.recipe.title} />
      <h3>{props.recipe.title}</h3>
      <button onClick={() => {callDetails()}}>Vai ai dettagli</button>
    </div>
  )
}

export default RecipeComponent