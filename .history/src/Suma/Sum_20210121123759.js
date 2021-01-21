import React from 'react';


export const sum = (a, b) => {
    const s= a+b;
    console.log(s)
    return s;
}
const Sum = () => {
    return (
        <div>
            Suma = {sum(14, 23)};
        </div>
    )
}

export default Sum;
