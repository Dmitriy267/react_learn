import { useReducer } from 'react';

function createState(initialState) {
    const initTodos = [];
    for (let i = 0; i < 10; i++) {
        initTodos.push({
            id: i,
            text: initialState + ' ' + `task ${i + 1}`,
        });
    }
    return {
        name: '',
        todos: initTodos,
    };
}
function inputReducer(state, action) {
    switch (action.type) {
        case 'change': {
            return { name: action.nextName, todos: state.todos };
        }
        case 'add': {
            return {
                name: '',
                todos: [
                    {
                        id: state.todos.length,
                        text: state.name,
                    },
                    ...state.todos,
                ],
            };
        }
    }
}

export const InputAdd = ({ initialState }) => {
    const [state, dispatch] = useReducer(
        inputReducer,
        initialState,
        createState
    );

    return (
        <>
            <input
                type="text"
                placeholder="Введите слово"
                value={state.name}
                onChange={(e) =>
                    dispatch({ type: 'change', nextName: e.target.value })
                }
            />
            <button onClick={() => dispatch({ type: 'add' })}>Добавить</button>
            <ul>
                {state.todos.map((t) => (
                    <li key={t.id}>{t.text}</li>
                ))}
            </ul>
        </>
    );
};
