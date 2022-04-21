import {useDispatch, useSelector} from "react-redux";
import { IInputAction } from "../../actions/IInputAction";
import { IListAction } from "../../actions/IListAction";
import { IIngredient } from "../../interfaces/IIngredient";
import { RootState } from "../../reducers";
import store from "../../store";
import { RiAddCircleLine } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import { Button, Figure, FormControl } from "react-bootstrap";
import "./InputComponent.css";
import Image from "react-bootstrap/Image";
import {ChangeEvent, useState} from "react";

const InputComponent = () => {
  const dispatch = useDispatch();
  const [ingName, setIngName] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIngName(e.target.value);
  };

  const onAddIngredient = () => {
    if (ingName !== "") {
      const ingredient: IIngredient = {
        id: Math.random() * 100,
        value: ingName
      };
      const listAction: IListAction = {
        type: "add",
        value: ingredient,
      };
      dispatch(listAction);
    }
  };

  return (
    <div>
      
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Enter a new ingredient"
          value={ingName}
          onChange={onChange}
          className="me-2"
        />
        <Button variant="success" onClick={onAddIngredient}>
          <RiAddCircleLine />
        </Button>
      </Form>
    </div>
  );
};

export default InputComponent;
