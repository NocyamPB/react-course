const HandleMessage = ({changeMessage}) => {
    const messages = ["Bom dia", "Boa tarde", "Boa noite"];

    return (
        <>
            <button onClick={() => changeMessage(messages[0])}>1</button>  
            <button onClick={() => changeMessage(messages[1])}>2</button>  
            <button onClick={() => changeMessage(messages[2])}>3</button>  
        </>
    )
}

export default HandleMessage