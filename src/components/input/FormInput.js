import React, {useState} from "react";
import './FormInput.css';


const FormInput = props => {

    const [enteredText, setEnteredText] = useState('');


    const enteredInputHandler = e => {
        if(enteredText.trim().length > 0){

        }
        setEnteredText(e.target.value)
    }

    const submitFormHandler = e => {
        e.preventDefault();
        if(enteredText.trim().length === 0){
            return;
        }

        props.onAdd(enteredText);

        setEnteredText('');

    }

    return (
        <form className="form" onSubmit={submitFormHandler}>
            <input
                type='text'
                placeholder="What would you want to do... "
                onChange = {enteredInputHandler}
                value = {enteredText}
            />
            <button className="add">Add</button>
        </form>
    );
}

export default FormInput;