import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Item 1", "Item 2", "Item 3"]);
    const [users] = useState([
        { id: 114123423, name: "Alice" },
        { id: 6236532532, name: "Bob" },
        { id: 3234257834, name: "Charlie" }
    ]);

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
        </div>
    )
}

export default ListRender;