import React, { useCallback, useState } from 'react';

const ChildComponent = React.memo(({ onButtonClick }) => {
    return <button onClick={onButtonClick}>Increment</button>;
});
export function ParentComponent() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');
    const handleButtonClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const handleToggle = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
    return (
        <>
            <h1>Current Theme: {theme}</h1>
            <button onClick={handleToggle}>Toggle Theme</button>
            <h2>Counter: {count}</h2>
            <ChildComponent onButtonClick={handleButtonClick} />
        </>
    );
}
