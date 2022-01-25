import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { addTask } from "../Redux/Action";


const AddItems = () => {
    const [myInput, setMyInput] = useState("")

    const dispatch = useDispatch()

    const add = (e) => {
        if (myInput) {
            e.preventDefault();
            dispatch(addTask({ description: myInput, id: Date.now(), isDone: false }));
            setMyInput("")
        }
        else {
            alert("yyegsdfg")
        }
    }


    return (
        <Card bg="primary">
            <Card.Body>
                <h1 className={"text-white"}>To-Do-App !</h1>

                <Form onSubmit={add} >
                    <Form.Group>
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setMyInput(e.target.value)}
                                value={myInput}
                            />
                            <Button variant="success" onClick={add}>
                                +
                            </Button>

                        </InputGroup>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>

    )
}

export default AddItems