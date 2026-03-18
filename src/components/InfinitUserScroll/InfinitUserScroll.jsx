import { useState, useEffect, useCallback } from 'react';
export function InfinitUserScroll() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const fetchData = useCallback(async () => {
        const response = await fetch(
            `https://api.github.com/users?since=${page * 20}`
        );
        const nextData = await response.json();
        setUsers((curData) => [...curData, ...nextData]);
    }, [page]);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollHeight - scrollTop === clientHeight) {
            setPage((prev) => prev + 1);
        }
    };
    return (
        <>
            <div
                onScroll={handleScroll}
                style={{ overflow: 'scroll', height: '400px' }}
            >
                <h1>Github Users</h1>
                <hr />
                {users.map((item, index) => (
                    <div key={index}>{item.login}</div>
                ))}
            </div>
        </>
    );
}
