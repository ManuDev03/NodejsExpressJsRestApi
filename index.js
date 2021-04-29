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
app.listen(3000,()=>{
    console.log('listening on port 3000...');
})
