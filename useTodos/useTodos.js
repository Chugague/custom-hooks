import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";



const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    
    const handleNewTodo = (todo) => {

        const action = {
            type: 'add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDelete = (id) => {

        const action = {
            type: 'delete Todo',
            payload: id
        }

        dispatch(action);
    }

    const handleToggle = (id) => {
            dispatch({
                type: 'toggle Todo',
                payload: id
            });
        }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;


        return {
            todosCount,
            pendingTodosCount,
            todos,
            handleNewTodo,
            handleDelete,
            handleToggle
        }


}
