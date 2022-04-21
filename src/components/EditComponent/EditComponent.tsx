import { IIngredient } from '../../interfaces/IIngredient';
import {BsCheckLg} from 'react-icons/bs'
import { IoIosRemove } from 'react-icons/io'
import { Button, Form } from 'react-bootstrap';
import './EditComponent.css'
import {useEffect, useState} from "react";

interface IEditComponent {
    ingredient: IIngredient,
    onEditIngredient: (newIngredient: IIngredient) => void
    onCloseEdit: () => void
}

const EditComponent = ({ingredient, onEditIngredient, onCloseEdit}: IEditComponent) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (ingredient) {
            setValue(ingredient.value);
        }
    }, [ingredient]);

    const onConfirmEdit = () => {
        if(value !== ""){
            const newIngredient: IIngredient = {
                ...ingredient,
                value,
            }
            onEditIngredient(newIngredient);
        }
    }

    return (
        <div>
            <Form className="d-flex editRow">
            <Form.Control
                type="text"
                placeholder={ingredient.value}
                onChange = {(e) => setValue(e.target.value)}
                className="me-2"
            />
            <Button variant="success" className="me-1" onClick={onConfirmEdit}> <BsCheckLg/> </Button>
            <span><Button variant="danger" onClick={onCloseEdit}><IoIosRemove/></Button></span>
            </Form>
        </div>
    )
}

export default EditComponent;