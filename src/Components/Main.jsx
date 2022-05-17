import React from 'react';
import { useState } from 'react';


const Main = () =>{
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(event){
        setData(event.target.value)
        console.log(event.target.value)

    }

    return(
        <div>
        <input type="text" onChange={getData}/>
           
            
            <button onClick={() => setPrint(true)}>Output</button>
            <div>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            </div>
            </div>

    );

}


export{
    Main
}