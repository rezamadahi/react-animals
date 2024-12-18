
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return(
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <h4>Number of animals: {count}</h4>
        </div>
    );
}


export default App;
