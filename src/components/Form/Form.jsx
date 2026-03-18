import { useReducer } from 'react';

const initialState = {
    firstName: '',
    email: '',
    body: '',
    status: 'update_field',
};
function formReducer(state, action) {
    switch (action.type) {
        case 'update_field': {
            return {
                ...state,
                [action.payload.field]: action.payload.value,
            };
        }
        case 'update_status': {
            return { ...state, status: action.payload.status };
        }
        case 'reset': {
            return init(initialState);
        }
        default: {
            return initialState;
        }
    }
}
const init = (initialState) => initialState;
export const Form = () => {
    const [state, dispatch] = useReducer(formReducer, initialState, init);
    const handleSubmit = (e) => {
        e.preventDefault();
        updateStatus('PENDING');
        setTimeout(() => {
            updateStatus('SUCCESS');
        }, 2000);
    };
    const updateChange = (field, value) => {
        dispatch({
            type: 'update_field',
            payload: {
                field,
                value,
            },
        });
    };
    const updateStatus = (status) => {
        dispatch({
            type: 'update_status',
            payload: {
                status,
            },
        });
    };
    const resetForm = () => {
        dispatch({ type: 'reset' });
    };
    if (state.status === 'SUCCESS') {
        return (
            <>
                <p>Your message was sent successfully.</p>
                <button onClick={resetForm}>Вернуть форму</button>
            </>
        );
    }

    // Error state
    if (state.status === 'ERROR') {
        return (
            <>
                <p>Oops! Something went wrong...</p>;
                <button onClick={resetForm}>Вернуть форму</button>
            </>
        );
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя
                <input
                    type="text"
                    name="firstName"
                    placeholder="Имя"
                    value={state.firstName}
                    onChange={(e) =>
                        updateChange(e.target.name, e.target.value)
                    }
                />
            </label>
            <label>
                Эл.почта
                <input
                    type="email"
                    name="email"
                    placeholder="Эл.почта"
                    value={state.email}
                    onChange={(e) =>
                        updateChange(e.target.name, e.target.value)
                    }
                />
            </label>
            <label>
                Сообщение
                <textarea
                    name="body"
                    value={state.body}
                    onChange={(e) =>
                        updateChange(e.target.name, e.target.value)
                    }
                />
            </label>
            <button type="submit" disabled={state.status === 'PENDING'}>
                {state.status !== 'PENDING' ? 'Отправить' : 'Отправка...'}
            </button>
        </form>
    );
};
