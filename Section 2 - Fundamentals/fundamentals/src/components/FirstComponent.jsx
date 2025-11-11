import ReusedComponent from "./ReusedComponent";

const FirstComponent = () => {

    //Testing commenting in JSX
    return (
        <div>
            {/*Testing commenting in JSX*/}
            
            <h1>Meu Primeiro Componente</h1>
            <p className="texto">Meu texto</p>
            <ReusedComponent/>
        </div>
    );
};

export default FirstComponent;