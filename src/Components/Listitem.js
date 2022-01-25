import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ListGroup, Button } from "react-bootstrap"
import { deleteTask, completeTask } from '../Redux/Action'
import EditItem from './EditItem'

const Listitem = () => {

    const list = useSelector(state => state.list)
    const dispatch = useDispatch()

    return (
        <ListGroup>
            {list.map((item, key) => <ListGroup.Item
                key={key}
                style={{ display: "flex", alignItems: "flex-end" }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-around",
                        width: "30%",
                    }}
                >
                    <Button
                        variant="outline-secondary"
                        onClick={() => dispatch(completeTask(item.id))}
                    >
                        {item.isDone ? "unDone" : "isDone"}
                    </Button>
                    <EditItem item={item} />
                    <Button
                        variant="danger"
                        onClick={() => dispatch(deleteTask(item.id))}
                    >
                        Delete
                    </Button>
                </div>
                <p style={{ margin: "0px", textDecoration: item.isDone ? "line-through" : null }} >
                    {item.description}
                </p>
            </ListGroup.Item>)}
        </ListGroup>
    )
}

export default Listitem