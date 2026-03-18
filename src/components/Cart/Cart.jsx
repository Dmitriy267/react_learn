import { useReducer } from 'react';

const initialState = {
    cart: [],
    shippingAddress: '',
    paymentMethod: '',
    orderReview: false,
};

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const EDIT_ITEM_QTY = 'EDIT_ITEM_QTY';
const SET_SHOPPING_ADRESS = 'SET_SHOPPING_ADRESS';
const PAYMENT_METHOD = 'PAYMENT_METHOD';
const ORDER = 'ORDER';
function cartReducer(state, action) {
    switch (action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cart: state.cart.filter((c) => c.id != action.id),
            };
        }
        case EDIT_ITEM_QTY: {
            const updateCart = state.cart.map((item) =>
                item.id === action.data.id
                    ? {
                          ...item,
                          qty:
                              action.data.type === 'increase'
                                  ? item.qty + 1
                                  : item.qty > 0
                                    ? item.qty - 1
                                    : item.qty,
                      }
                    : item,
            );
            return {
                ...state,
                cart: updateCart,
            };
        }
        case SET_SHOPPING_ADRESS: {
            return {
                ...state,
                shippingAddress: action.adress,
            };
        }
        case PAYMENT_METHOD: {
            return {
                ...state,
                paymentMethod: action.payment,
            };
        }
        case ORDER: {
            return {
                ...state,
                orderReview: !state.orderReview,
            };
        }
        default: {
            throw Error('Unknown action' + action.type);
        }
    }
}
export function Cart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    function AddToCart(item) {
        dispatch({
            type: ADD_ITEM,
            item: item,
        });
    }
    function removeItemCart(id) {
        dispatch({
            type: REMOVE_ITEM,
            id,
        });
    }
    function editCartItemQuantity(id, type = 'increase') {
        const data = { id, type };

        dispatch({
            type: EDIT_ITEM_QTY,
            data,
        });
    }
    function handleChangeAdress(e) {
        dispatch({
            type: SET_SHOPPING_ADRESS,
            adress: e.target.value,
        });
    }
    function handleChangePaymentMethod(e) {
        dispatch({
            type: PAYMENT_METHOD,
            payment: e.target.value,
        });
    }
    function toggleOrderReview() {
        dispatch({
            type: ORDER,
        });
    }
    return (
        <>
            <h2>Cart</h2>
            {state.cart.map((item) => (
                <div key={item.id}>
                    <p>{item.name + ' ' + item.id}</p>
                    <button onClick={() => removeItemCart(item.id)}>
                        Remove
                    </button>
                    <button
                        onClick={() =>
                            editCartItemQuantity(item.id, 'increase')
                        }
                    >
                        +
                    </button>
                    <button>{item.qty}</button>
                    <button
                        onClick={() =>
                            editCartItemQuantity(item.id, 'decrease')
                        }
                    >
                        -
                    </button>
                </div>
            ))}

            <button
                onClick={() =>
                    AddToCart({ id: Date.now(), name: 'Item', qty: 1 })
                }
            >
                Add Item
            </button>
            <h2>Shopping Adress</h2>
            <input
                type="text"
                value={state.shippingAddress}
                onChange={handleChangeAdress}
            />
            <div>
                <h2>Payment Method</h2>
                <input
                    type="text"
                    value={state.paymentMethod}
                    onChange={handleChangePaymentMethod}
                />
            </div>
            <div>
                <h2>Order Review</h2>
                <button onClick={toggleOrderReview}>
                    {state.orderReview ? 'Unreview' : 'Review'} Order
                </button>

                {state.orderReview && (
                    <p>
                        Order Summary: Cart - {state.cart.length} items,
                        Shipping - {state.shippingAddress}, Payment -{' '}
                        {state.paymentMethod}
                    </p>
                )}
            </div>
            <div>
                <button onClick={() => alert('Order Submitted')}>
                    Submit Order
                </button>
            </div>
        </>
    );
}
