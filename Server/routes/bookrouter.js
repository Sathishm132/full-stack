const express=require("express");
const bookcontroller=require("../controller/bookcontroller")
const Router=express.Router()
Router.get('/',bookcontroller.getappoinment)
Router.post("/",bookcontroller.postappoinment)
Router.delete('/delete/:id',bookcontroller.deleteappoinment)
module.exports=Router;