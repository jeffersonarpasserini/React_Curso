import { useState, useRef } from 'react'
import styles from './MyForms.module.css';

const MyForms = ({user}) => {
    //6 controled input
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    // Crie uma referência para o campo de entrada
    const nameInputRef = useRef(null);

    const handleNameChange = (event) => {
        setName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando dados");
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);
        setName('');
        setEmail('');
        setBio('');
        setRole('');

        // Defina o foco no campo de entrada após o envio
        nameInputRef.current.focus();
    }
   
    console.log(name)
    console.log(email)

    return (
        <div>
        <h2>Meu primeiro formulario</h2>
        <form onSubmit={handleSubmit} className={styles.myForm}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" 
                value={name}
                placeholder='Digite seu nome' 
                onChange={handleNameChange} 
                ref={nameInputRef} // Atribua a referência ao campo de entrada
                />
            </div>
            {/* label envolvendo input */}
            <div>
                <label>
                    <span>E-mail</span>
                    <input type="email" id="email" 
                    name="email" placeholder='Digite seu email' value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descricão do usuario' 
                    onChange={(e) => setBio(e.target.value)} value={bio}>
                    </textarea>
                </label>
            </div>
            <div>
                <label>
                    <span>Função:</span>
                    <select name="role" id="role"
                     onChange={(e) => setRole(e.target.value)} 
                     value={role}>
                        <option value="user">Usuário</option>
                        <option value="analista">Analista</option>
                        <option value="adminstrator">Administrador</option>
                    </select>

                </label>
            </div>
            <input type="submit" value="Enviar" />
        </form>
        </div>
    );
};

export default MyForms;