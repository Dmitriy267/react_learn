import { createContext, useContext } from 'react';
const foodContext = createContext(null);
export function UseContextList() {
    const food = {
        hot: 'pizza',
        cold: 'ice-cream',
    };
    return (
        <>
            <foodContext.Provider value={food}>
                <AllFood />
            </foodContext.Provider>
        </>
    );
}

function AllFood() {
    return (
        <>
            <ColdFood />
            <HotFood />
        </>
    );
}

function ColdFood() {
    const coldContext = useContext(foodContext);
    return (
        <>
            <p>Холодная еда: {coldContext.cold}</p>
        </>
    );
}

function HotFood() {
    const hotContext = useContext(foodContext);
    return (
        <>
            <p>Горячая еда: {hotContext.hot}</p>
        </>
    );
}
