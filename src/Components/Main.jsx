import React from 'react';
import { useState } from 'react';
import { Output } from './Output';


const Main = () =>{
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    // const emogis = [
    //     {
    //         id:'::happy::',n: '🙂'
    //     },
    //     {
    //         id:'::sad::',n: '😢'
    //     },
    //     {
    //         id:'::smiley::',n: '😀'
    //     }
    // ]

    

    function getData(event){
             
        setData(event.target.value)

        app.post("/", async(req, res) => {
            try {
                const input = req.body.input;

                const registerUser = new Register({
                    input:req.body.input                 
                })
                const registered = await registerUser.save();
                res.status(201).render("error");
            } catch (error) {
                res.status(201).render("")
            }
        
        });

        
        // console.log(event.target.value)
       
    }

    function findOutput(data){
        Output(data)
        // var s = data
        // console.log(s)

        // const emojiMap = {
        //     happy: "&#x1f600",
        //     sad:'😢',
        //     smiley:'😀'
        // }
        // let result;

        // const regExpression =  /:([^:]*):/g
        // const text = new String (s)
        // console.log(text)
        // const emojiIt = (re , text) =>{
        //     while(result = re.exec(text)){
        //         text = text.replace(result[0], emojiMap[result[1]])

        //     }
        //     console.log(text)
        //     return text

        // }

        // var ans = emojiIt(regExpression,text)
        // console.log(ans)

        
       
       
        

    }
    function displayOutput(data){
        findOutput(data);
        setPrint(true);
       
    }

    return(
        <div>
        <input type="text" onChange={getData}/>
           
        {/* setPrint(true) */}
            <button onClick={() => displayOutput(data)}>Output</button>
            
            </div>

    );

}


export{
    Main
}