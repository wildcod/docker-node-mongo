const express = require('express')
const Items = require('./model/items')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose.connect('mongodb://mongo:27018/docker-node-mongo',{useNewUrlParser:true}).then(() => console.log("mongodb is connected")).catch((e) => console.log(e))

app.set('view engine' , 'hbs')

app.get('/',async (req,res) => {

    const data = await Items.find({}) 
    console.log(data)       

    res.render('index',{data})
})

app.post('/additem', async (req,res) => {
     const { item } = req.body
    
     const updatedItems = new Items({
         item : item
     })

     const data = await updatedItems.save()

     res.redirect('/')

})

app.listen(4000,() =>  console.log("server is start at 4000"))