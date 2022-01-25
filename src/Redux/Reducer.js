import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./ActionType";


//const x = {id : 1, name :"salim"}


const initialState = {
    list: [
        {id : 1, description :"salim"}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, list: [...state.list, action.payload] }

        case DELETE_TASK:
            return { ...state, list: state.list.filter(el => el.id !== action.payload) }

        case COMPLETE_TASK:
            return { ...state, list: state.list.map(el => el.id === action.id ? { ...el, isDone: !el.isDone } : el) }

        case EDIT_TASK:
            
            return { ...state, list: state.list.map(el => el.id === action.payload.id ? { ...el, description: action.payload.description } : el) }

        default:
            return state;
    }
}

export default reducer