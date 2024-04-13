import { useState } from "react";

export const Event = () => {

    const[text, setText] = useState("");

    function inputTexto (event) {
        setText(event.target.value); 

    }

    return(
        <div>
            <input onChange={inputTexto} />     
            <p>USER:{ text }</p> 
        </div>
    );
}

