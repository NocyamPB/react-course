const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e);
    };

    const renderSomething = (x) => {
        if(x) {
            return <h2>Rendering TRUE</h2>;
        }
        else{
            return <h2>Rendering FALSE</h2>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click me!</button>
            </div>
            <div>
                <button onClick={() => console.log("Click")}>Click me too!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events