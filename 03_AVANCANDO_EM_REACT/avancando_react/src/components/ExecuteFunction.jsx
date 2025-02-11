

const ExecuteFunction = ({ myFunction }) => {
  const handleClick = () => {
    console.log('Botão clicado');
  }

  return (
    <div>
      <button onClick={myFunction}>Clique aqui - função Comp. Pai</button>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  )
}

export default ExecuteFunction