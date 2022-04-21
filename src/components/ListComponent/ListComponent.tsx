
import { IIngredient } from "../../interfaces/IIngredient";
import IngredientComponent from "../IngredientComponent/IngredientComponent";
import {FC} from "react";
import {ListGroup} from "react-bootstrap";

interface Props {
  list: IIngredient[]
}

const ListComponent: FC<Props> = ({ list }) => {
  return (
    <ListGroup>
      {list.map((ingredient: IIngredient) => {
        return <ListGroup.Item key={ingredient.id}>
          <IngredientComponent ingredient={ingredient}/>
        </ListGroup.Item>
      })}
    </ListGroup>
  );
};

export default ListComponent;
