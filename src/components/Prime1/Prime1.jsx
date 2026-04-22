import { memo, useMemo, useState } from 'react';

const Child = memo(({ user }) => {
    console.log('Child rendered');
    return <p> {user.name}</p>;
});

export function Prime1() {
    const [count, setCount] = useState(0);
    const user = useMemo(() => ({ name: 'Big Poppa' }), []);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <Child user={user} />
        </>
    );
}
