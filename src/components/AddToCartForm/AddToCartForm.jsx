import { useActionState } from 'react';
import './AddToCartForm.css';
async function addToCart(prev, formData) {
    const itemID = formData.get('itemID');

    if (itemID === '1') {
        return {
            success: true,
            cartSize: 12,
        };
    } else {
        return {
            success: false,
            message: 'The item is sold out.',
        };
    }
}
export function AddToCartForm({ itemID, itemTitle }) {
    const [formState, formAction] = useActionState(addToCart, {});
    return (
        <>
            <form action={formAction}>
                <h2>{itemTitle}</h2>
                <input type="hidden" name="itemID" value={itemID} />
                <button type="submit">Add to Cart</button>
                {formState?.success && (
                    <div className="toast">
                        Added to cart! Your cart now has {formState.cartSize}{' '}
                        items.
                    </div>
                )}
                {formState?.success === false && (
                    <div className="error">
                        Failed to add to cart: {formState.message}
                    </div>
                )}
            </form>
        </>
    );
}
