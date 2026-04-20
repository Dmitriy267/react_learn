import { useMemo } from 'react';

export function SumItems() {
    const marketList = {
        orange: {
            price: 14.5,
            qtd: 2,
        },
        apple: {
            price: 20,
            qtd: 5,
        },
        banana: {
            price: 2.6,
            qtd: 11,
        },
    };
    function sumValues() {
        let total = Object.values(marketList).reduce((acc, cur) => {
            return acc + cur.price * cur.qtd;
        }, 0);
        return total;
    }
    const totalPrice = useMemo(() => sumValues(marketList), [marketList]);

    return (
        <>
            <p>Total: {totalPrice}</p>
        </>
    );
}
