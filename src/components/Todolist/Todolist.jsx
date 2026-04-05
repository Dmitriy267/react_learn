import { useReducer, useState } from 'react';

const initialState = {
    todos: [],
};
const ADD = 'add';
const TOGGLE = 'toggle';
const DELETE = 'delete';
function reducer(state, action) {
    switch (action.type) {
        case ADD: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        }
        case TOGGLE: {
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo,
                ),
            };
        }
        case DELETE: {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        }
        default:
            throw Error('Unknown action' + action.type);
    }
}
export function Todolist() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleAddTodo = (todo) => {
        dispatch({ type: 'add', payload: todo });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: 'toggle', payload: id });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: 'delete', payload: id });
    };
    return (
        <>
            <TodoForm onAddTodo={handleAddTodo} />
            {state.todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={handleToggleTodo}
                    onDeleteTodo={handleDeleteTodo}
                />
            ))}
        </>
    );
}

function TodoForm({ onAddTodo }) {
    const [text, setText] = useState('');
    function handleChange(e) {
        setText(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) {
            return;
        }
        onAddTodo({
            id: Math.random(),
            text: text,
            completed: false,
        });
        setText('');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
}

function Todo({ todo, onToggleTodo, onDeleteTodo }) {
    const handleToggle = () => {
        onToggleTodo(todo.id);
    };

    const handleDelete = () => {
        onDeleteTodo(todo.id);
    };
    return (
        <>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <span
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
            >
                {todo.text}
            </span>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
}
