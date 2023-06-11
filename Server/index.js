const express=require("express")
const bodyParser = require('body-parser');
const cors=require('cors')
const app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const router=require("./routes/bookrouter");
const sequelize=require("./models/user");
const { options } = require("./routes/bookrouter");
app.use("/api",router)
sequelize.sync().then((res)=>{
   
})
app.listen(3001,()=>{
    console.log("sucsess")
})