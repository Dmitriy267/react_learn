import { useActionState } from 'react';
async function increment(prev) {
    return prev + 1;
}
export function StatefulForm() {
    const [state, formAction] = useActionState(increment, 0);
    return (
        <>
            <form>
                {state}
                <button formAction={formAction}>Increment</button>
            </form>
        </>
    );
}
