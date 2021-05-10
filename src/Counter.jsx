import { useState, useEffect } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('this component is mounted');  
        return () => {
            console.log('component is unmounted');
        }
    }, []);

    return ( 
        <div>
            <h4>Counter</h4>
            <p>Current counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment the count</button>
        </div>
     );
}
 
export default Counter;