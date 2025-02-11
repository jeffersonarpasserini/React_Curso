
const UserDetails = ({ nome, idade, profissao }) => {
    const podeTirarCarteira = idade >= 18;

    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            {podeTirarCarteira ? (
                <p>Pode tirar a carteira de habilitação</p>
            ) : (
                <p>Não pode tirar a carteira de habilitação</p>
            )}
        </div>
    );
};

export default UserDetails;