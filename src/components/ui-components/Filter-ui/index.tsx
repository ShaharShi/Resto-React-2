import React, { useState } from "react"
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface IProps {
    action: Function
}

export default function FilterUI(props: IProps) {
    const { action } = props
    const initialState: any = {value: '', by: 'FILTER_MEAL_BY_NAME'}
    const [localState, setLocalState] = useState(initialState)

    function handleChange(filterValue: any) {
        setLocalState({...localState, value: filterValue})
    }
    function handleRadioChange({target}: any) {
        const {value} = target
        setLocalState({...localState, by: value})

    }
    function handleSubmit() {
        action(localState)
    }
    return (
        <div className="row mb-4 p-2 bg-light">
            <Form.Group className={'w-100'}>
            <InputGroup>
                <FormControl
                placeholder="Search Meal"
                aria-label="Search Meal"
                aria-describedby="basic-addon2"
                onChange={(e) => {handleChange(e.target.value)}}/>
                <Button type={'radio'} variant="outline-primary" value={'FILTER_MEAL_BY_NAME'} name={'name'} onClick={(e) => { handleRadioChange(e)}}>By Name</Button>
                <Button type={'radio'} variant="outline-primary" value={'FILTER_MEAL_BY_DESCRIPTION'} name={'discription'} onClick={(e) => {handleRadioChange(e)}}>By Discription</Button>
                <Button variant="primary" onClick={handleSubmit}>Search</Button>
            </InputGroup>
            </Form.Group>
        </div>
    )
}



