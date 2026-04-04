import { useReducer, useState } from 'react';

const initialStateAlboms = {
    data: [],
    loading: false,
    error: null,
    users: [],
};
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';
const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE';
const DELETE_USERS = 'DELETE_USERS';
function reducer(alboms, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUEST: {
            return { ...alboms, loading: true, error: null };
        }
        case FETCH_POSTS_SUCCESS: {
            return {
                ...alboms,
                data: action.payload,
                loading: false,
                error: null,
            };
        }
        case FETCH_POSTS_FAILURE: {
            return {
                ...alboms,
                loading: false,
                error: action.payload,
            };
        }

        case ADD_USERS_SUCCESS: {
            return {
                ...alboms,
                users: [...alboms.users, action.payload],
            };
        }
        case DELETE_USERS: {
            return {
                ...alboms,
                users: alboms.users.filter(
                    (user) => user.id !== action.payload,
                ),
            };
        }
        case ADD_USERS_FAILURE: {
            return {
                ...alboms,
                error: action.payload,
            };
        }

        default: {
            return alboms;
        }
    }
}
export function Alboms() {
    const [alboms, dispatch] = useReducer(reducer, initialStateAlboms);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const fetchData = async () => {
        dispatch({ type: FETCH_POSTS_REQUEST });
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users',
            );
            const data = await response.json();
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);

        try {
            dispatch({
                type: ADD_USERS_SUCCESS,
                payload: {
                    id: Math.random(),
                    name: formData.get('name'),
                    email: formData.get('email'),
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    function handeClickDelete(id) {
        dispatch({ type: DELETE_USERS, payload: id });
    }

    return (
        <>
            {alboms.loading ? (
                <p>Загрузка...</p>
            ) : alboms.error ? (
                <p>{alboms.error}</p>
            ) : (
                <div>
                    {alboms.data.map((albom) => (
                        <div key={albom.id}>
                            <p>Имя {albom.name}</p>
                            <p>Почта {albom.email}</p>
                        </div>
                    ))}
                    <button onClick={fetchData}>Загрузить данные </button>
                </div>
            )}
            <h3>Добавить пользователя</h3>

            <div>
                <ul>
                    {alboms.users.map((user) => (
                        <li key={user.id}>
                            <p>Имя {user.name}</p>
                            <p>Почта {user.email}</p>
                            <button onClick={() => handeClickDelete(user.id)}>
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Введите почту"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Отправить</button>
            </form>
        </>
    );
}
