import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {
    
  
    const init = () => {
      return JSON.parse(localStorage.getItem('todos')) || [];
    }
  
    const [todos, dispatchTodo ] = useReducer(todoReducer, [], init);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    
  
    const handleNewTodo = (todo) => {
      const action = {
        type: 'Add TODO',
        payload: todo,
      };
  
      dispatchTodo( action );
    };
  
  
    const handleDeleteTodo = (id) => {
  
      dispatchTodo({
        type: 'Remove TODO',
        payload: id,
      });
    }
  
    const handleOnToggleTodo = (id) => {
  
      dispatchTodo({
        type: 'Toggle TODO',
        payload: id
      });
    };

    const todosCount = todos.length

    const pendingTodosCount = todos.filter(todo=>!todo.done).length
    
    return {
        todos, 
        handleDeleteTodo, 
        handleOnToggleTodo, 
        handleNewTodo,
        todosCount,
        pendingTodosCount
    }
};