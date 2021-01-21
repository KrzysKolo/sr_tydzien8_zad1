import React from 'react';


export const sum = (a, b) => {
    return a + b;
}
const Sum = () => {
    return (
        <div>
            Suma = {sum(5, 5)};
        </div>
    )
}

export default Sum;
