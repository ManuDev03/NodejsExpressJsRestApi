const express = require('express')
const app = express()

// app.get()
// app.post()
// app.put()
// app.delete()

// no if blocks


//2 arg path,callback function-which will be called when we have an http request 2 arg req res
app.get('/',(req,res)=>{
    res.send('hello world ')

})
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3])
})
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
})

const port= process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
