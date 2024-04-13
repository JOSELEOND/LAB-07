import { useState } from "react";

export const Buttonre = props => {

    const { text } = props; 
    const { text1 } = props; 
    const[count, setCount] = useState(0);

    function handlerButton() {
        setCount(count + 5);
    }
    function buttonReset () {
        setCount(0);
    }

    return(
        <div>
            <button onClick={ handlerButton }>
                { text } { count }
            </button>
            <br></br>
            <button onClick={ buttonReset }>
                { text1 }
            </button>
        </div>
        
    );
}

