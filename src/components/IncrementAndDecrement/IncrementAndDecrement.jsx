import { useReducer } from 'react';

const initialState = {
    count: 0,
};
function reducerBtn(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };

        case 'decrement':
            return { ...state, count: state.count - 1 };

        default:
            throw new Error('action unknown');
    }
}
export function IncrementAndDecrement() {
    const [state, dispatch] = useReducer(reducerBtn, initialState);

    return (
        <>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
        </>
    );
}
