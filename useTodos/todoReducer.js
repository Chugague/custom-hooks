

export const todoReducer = (initialState = [], action) => {
    
        switch (action.type) {
            case 'add Todo':
                return [...initialState, action.payload];
    
            case 'delete Todo':
                return initialState.filter(todo => todo.id !== action.payload);
    
            case 'toggle Todo':
                return initialState.map(todo => (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo);
    
            // case 'toggle-old':
            //     return state.map(todo => {
            //         if (todo.id === action.payload) {
            //             return {
            //                 ...todo,
            //                 done: !todo.done
            //             }
            //         } else {
            //             return todo;
            //         }
            //     });
    
            default:
                return initialState;
        }
    
    }