import { useEffect, useReducer } from 'react';
const initialState = {
    users: [],
};
function reduser(state, action) {
    switch (action.type) {
        case 'add': {
            return {
                ...state,
                users: action.payload,
            };
        }

        case 'del': {
            return {
                ...state,
                users: state.users.filter((item) => item.id !== action.payload),
            };
        }

        default: {
            throw Error('Unknown action' + action.type);
        }
    }
}
export function Users() {
    const [state, dispatch] = useReducer(reduser, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/users',
                );
                const result = await res.json();
                dispatch({ type: 'add', payload: result });
                if (!res.ok) {
                    throw Error('ошибка данных');
                }
            } catch (err) {
                console.log(`сбой:` + err.message);
            }
        };
        fetchData();
    }, []);

    function Delete(id) {
        dispatch({ type: 'del', payload: id });
    }
    return (
        <>
            {' '}
            <ul>
                {state.users.map((user) => (
                    <li key={user.id}>
                        {user.name}{' '}
                        <button onClick={() => Delete(user.id)}>
                            Удалить
                        </button>{' '}
                    </li>
                ))}
            </ul>
        </>
    );
}
