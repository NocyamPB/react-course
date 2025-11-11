const TemplateExpressions = () => {

    const name = "Miguel"
    const data = {
        job: "Coder",
        age: 24
    }

    return (
        <div>
            <h2>Hello, {name}.</h2>
            <p>You are a {data.job}</p>
            <p>and 2 + 3 = {2+3}</p>
        </div>
    )
}

export default TemplateExpressions