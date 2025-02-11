import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "João", "Maria", "José"]);
    
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 20},
        {id: 2, name: "João", age: 30},
        {id: 3, name: "Maria", age: 40},
        {id: 4, name: "José", age: 50}
    ]);

    const deleteRandomUser = () => {
        const randomIndex = Math.floor(Math.random() * users.length);
        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomIndex !== user.id);
        });
    };


    return (
        <div>
            {/* Renderizando lista de objetos */}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* Renderizando lista de objetos - correto*/}
            <ul>
                {users.map((user, index) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandomUser}>
                Delete Random User
            </button>
        </div>
    );
}

export default ListRender;