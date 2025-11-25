import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Item 1", "Item 2", "Item 3"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ]);

    const deleteRandom = () => {
        const randomIndex = Math.floor(Math.random() * 4);
        
        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => user.id !== randomIndex);
        });
        
    }

    return (
        <div>
            <h2>List Render</h2>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete random User</button>
        </div>
    )
}

export default ListRender;