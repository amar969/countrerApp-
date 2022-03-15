import React, { useState } from "react";

function Add(){
    const [count, setCount] = useState(5);

    const double = count * 2

    const divide = count / 2

    return (<>
        <h1>Count : {count} </h1>
        <button onClick={() => setCount(count+1)}>Add</button>
        <button onClick={() => setCount(count-1)}>Reduce</button>
        <button onClick={() => setCount(double)}>Double</button>
        <button onClick={() => setCount(divide)}>Divide</button>
        
    </>)
}

export {Add}