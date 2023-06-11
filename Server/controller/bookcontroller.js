const { where } = require("sequelize");
const user=require("../models/user")
exports.postappoinment=(req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email
    user.create({
        name:name,
        phone:phone,
        email:email,       
    }).then(()=>{
       res.json(req.body)
    })
    
}
exports.getappoinment=(req,res)=>{
    user.findAll().then((users)=>{
        res.status(200).json({"alluser":users})
       
    })
}
exports.deleteappoinment=(req,res)=>{
    const id=req.params.id
    user.destroy({where:{
        id:id
    }}).then(()=>{
        res.json("sucsess")
    })
}