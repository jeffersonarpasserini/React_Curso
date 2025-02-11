import MyComponent from "./MyComponent";

const TemplateExpressions = () => {
    const name = 'Fernando';
    const data ={age: 31, job: 'developer'};
    return (
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Eu tenho {data.age} anos e sou {data.job}.</p>
            <MyComponent />
        </div>
    );

};

export default TemplateExpressions;