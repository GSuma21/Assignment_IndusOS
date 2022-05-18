function Output(data){
    const emojiMap = {
        happy: '🙂',
        sad:'😢',
        smiley:'😀'
    }
    let result;
    const regExpression =  /:([^:]*):/g
    const text = data
    const emojiIt = (re , text) =>{
        while(result = re.exec(text)){
            text = text.replace(result[0], emojiMap[result[1]])
    
        }
        return text
    }
   var ans =  emojiIt(regExpression ,text)
   document.getElementById('test').innerHTML = emojiIt(regExpression,text)



}

export {Output}
