import React from 'react';
import { useState } from 'react';


const Main = () =>{
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    const emogis = [
        {
            id:'::happy::',n: '🙂'
        },
        {
            id:'::sad::',n: '😢'
        },
        {
            id:'::smiley::',n: '😀'
        }
    ]

    function getData(event){
             
        setData(event.target.value)
        // console.log(event.target.value)
       
    }
    function displayOutput(data){
        setPrint(true);
        for(let i=0;i<data.length;i++){       
                console.log(data);  
                if(data[i] == ':') {
                    
                }     
        }

        console.log(emogis)
    }

    return(
        <div>
        <input type="text" onChange={getData}/>
           
        {/* setPrint(true) */}
            <button onClick={() => displayOutput(data)}>Output</button>
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