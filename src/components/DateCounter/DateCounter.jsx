import { useReducer } from 'react';

const initialState = {
    count: 0,
    step: 1,
};

function reducer(state, action) {
    switch (action.type) {
        case 'inc': {
            return {
                ...state,
                count: state.count + state.step,
            };
        }
        case 'dec': {
            return {
                ...state,
                count: state.count - state.step,
            };
        }
        case 'step': {
            return {
                ...state,
                step: action.payload,
            };
        }
        case 'def': {
            return {
                ...state,
                count: action.payload,
            };
        }
        case 'res': {
            return initialState;
        }

        default:
            throw Error('Uncknown action' + action.type);
    }
}
export function DateCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const date = new Date('june 21 2027');
    date.setDate(date.getDate() + state.count);
    function handleChengeStep(e) {
        dispatch({
            type: 'step',
            payload: Number(e.target.value),
        });
    }

    function dec() {
        dispatch({ type: 'dec' });
    }
    function inc() {
        dispatch({ type: 'inc' });
    }
    function defineCount(e) {
        dispatch({
            type: 'def',
            payload: Number(e.target.value),
        });
    }
    function reset() {
        dispatch({
            type: 'res',
        });
    }
    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={state.step}
                    onChange={handleChengeStep}
                />
                <span>{state.step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={state.count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
