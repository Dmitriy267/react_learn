// import { useState, useEffect } from 'react';
import { use } from 'react';
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
    (r) => r.json()
);
export function UseExample() {
    //  const [users, setUsers] = useState([]);

    //  useEffect(() => {
    //      async function fetchUsers() {
    //          const response = await fetch(
    //              'https://jsonplaceholder.typicode.com/users'
    //          );
    //          setUsers(await response.json());
    //      }
    //      fetchUsers();
    //  }, []);
    const users = use(fetchUsers);
    console.log(users);
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
