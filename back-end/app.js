const express = require('express')
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.render("")

});

app.post("/", async(req, res) => {
    try {
        const input = req.body.input;
        
 
    } catch (error) {
        res.status(201).render("")
    }

});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})