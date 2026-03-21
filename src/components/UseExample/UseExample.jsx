// import { useState, useEffect } from 'react';
import { use } from 'react';
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
    (r) => r.json(),
);
export function UseExample() {
    const users = use(fetchUsers);

    return (
        <>
            <ul className="collection">
                {users.map((user) => (
                    <li key={user.id} className="collection-item">
                        {user.name}
                    </li>
                ))}
            </ul>
        </>
    );
}
