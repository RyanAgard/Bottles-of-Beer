const express = require('express')
// Create our express app
const app = express()

let number_of_bottles = 99

// Our "root" route for our app 
app.get('/', (req, res) => {
    res.send(`<a href = ${number_of_bottles}> Bottles of beer on the wall </a> ` )


})
app.get('/:number',(req, res)=> {
      let number_of_bottles = req.params.number
      
      if(number_of_bottles > 0){
        res.send(`
      <h1>${number_of_bottles}Bottles of beer on the wall
       <a href ='/${number_of_bottles - 1}'>take one down pass it around </a>
        </h1>
        `);
      }else{
         res.send(`
         <h1>${number_of_bottles}Bottles of beer on the wall
         <a href ='/'>start over</a>
         </h1>
         `);
    }

})

// Tell the app to listen on port 8080 for HTTP requests from clients
app.listen(8080, () => {
    console.log('Listening on port 8080')
})
