import { IIngredientDetail } from '../../interfaces/IRecipeDetails'

interface IDetailIngredientComponent {
    ingr: IIngredientDetail
}

const DetailIngredientComponent = (props:IDetailIngredientComponent) => {
  return (
    <div>
        <span>{props.ingr.name}</span>
        <span>({props.ingr.measures.metric.amount} {props.ingr.measures.metric.unitShort})</span>
    </div>
  )
}

export default DetailIngredientComponent