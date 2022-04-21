import {Button, Col, Row} from 'react-bootstrap'
import { IListAction } from '../../actions/IListAction'
import { IIngredient } from '../../interfaces/IIngredient'
import { GrEdit } from 'react-icons/gr'
import { IoIosRemove } from 'react-icons/io'
import './IngredientComponent.css'
import {useDispatch} from "react-redux";
import {useState} from "react";
import EditComponent from "../EditComponent/EditComponent";

interface IIngredientComponent {
    ingredient: IIngredient
}

const IngredientComponent = ({ ingredient }:IIngredientComponent) => {
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    const onDeleteIngredient = () => {
      const action: IListAction = {
          type: 'remove',
          value: ingredient
      }
      dispatch(action);
    }

    const onEditIngredient = (newIng: IIngredient) => {
        const action: IListAction = {
          type: 'edit',
          value: newIng
        }
        dispatch(action);
        onCloseEdit();
    }

    const onCloseEdit = () => {
        setIsEdit(false);
    }

  if (isEdit) {
      return <EditComponent
          ingredient={ingredient}
          onEditIngredient={onEditIngredient}
          onCloseEdit={onCloseEdit} />
  }

  return (
    <Row>
      <Col xs={8} className={'d-flex align-items-center'}>
        <span>{ingredient.value}</span>
      </Col>
      <Col xs={4}>
          <div className="d-flex gap-2 justify-content-end">
              <Button variant="warning" onClick={() => setIsEdit(!isEdit)}> <GrEdit/> </Button>
              <Button variant="danger" onClick={onDeleteIngredient}> <IoIosRemove/> </Button>
          </div>
      </Col>
    </Row>
  )
}

export default IngredientComponent;