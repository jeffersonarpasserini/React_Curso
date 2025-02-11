import React from 'react';

const Challenge = ({ value1, value2 }) => {
    const sum = value1 + value2;

    console.log(`Value 1: ${value1}, Value 2: ${value2}, Sum: ${sum}`);

    return (
        <div>
            <h1>Challenge Component</h1>
            <p>Value 1: {value1}</p>
            <p>Value 2: {value2}</p>
            <p>The sum is: {sum}</p>
        </div>
    );
};

export default Challenge;