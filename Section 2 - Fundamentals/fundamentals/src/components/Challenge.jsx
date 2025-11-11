const Challenge = () => {
    const x = 3;
    const y = 7;

    const sumXY = () => {
        console.log(x+y);
    }

    return (
        <div>
            <p>x = {x}</p>
            <p>y = {y}</p>
            <button onClick={sumXY}>X + Y</button>
        </div>
    )
}

export default Challenge;