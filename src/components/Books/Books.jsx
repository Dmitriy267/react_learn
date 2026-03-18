import { useReducer } from 'react';

const initialState = {
    name: 'Kelvin Mwinuka',
    occupation: 'Software Developer',
    languages: ['JavaScript', 'Python'],
    frameworks: ['React', 'Flask', 'Express'],
};

const REMOVE_LANGS = 'REMOVE_LANGS';
const ADD_LANG = 'ADD_LANG';
const ADD_FRAM = 'ADD_FRAM';
function reducer(state, action) {
    switch (action.type) {
        case REMOVE_LANGS: {
            return {
                ...state,
                languages: state.languages.filter(
                    (lang, index) => index !== action.payload,
                ),
            };
        }
        case ADD_LANG: {
            return {
                ...state,
                languages: [...state.languages, action.payload],
            };
        }
        case ADD_FRAM: {
            return {
                ...state,
                frameworks: [...state.frameworks, action.payload],
            };
        }
        default: {
            throw Error('Uncknown action' + action.type);
        }
    }
}
export function Books() {
    const [state, dispatch] = useReducer(reducer, initialState);
    function removeLang(index) {
        dispatch({
            type: REMOVE_LANGS,
            payload: index,
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const language = formData.get('language');
        const framework = formData.get('framework');

        const action = language
            ? { type: ADD_LANG, payload: language }
            : framework
              ? { type: ADD_FRAM, payload: framework }
              : null;
        dispatch(action);
        e.target.reset();
    }
    return (
        <>
            <div>
                <p>
                    <b>{state.name} </b>({state.occupation})
                </p>
                <h3>Languages</h3>
                <ul>
                    {state.languages.map((lang, index) => {
                        return (
                            <li key={index}>
                                <b>{lang}</b>

                                <button onClick={() => removeLang(index)}>
                                    Remove
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="language" />
                    <input type="submit" value="Add Language" />
                </form>
                <h3>Frameworks</h3>
                <ul>
                    {state.frameworks.map((framework, index) => {
                        return (
                            <li key={index}>
                                <b>{framework}</b>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'REMOVE_FRAMEWORK',
                                            payload: index,
                                        });
                                    }}
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="framework" />
                    <input type="submit" value="Add Framework" />
                </form>
            </div>
        </>
    );
}
