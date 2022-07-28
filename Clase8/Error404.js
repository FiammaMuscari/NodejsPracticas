const { application, Router } = require("express");

application.use(function(req,res,next){
    res.status(404).send('Sorry cant find that!')
})

//otra forma

Router.use((req, res)=>{
    res.status(404).send('NOT FOUND')
})

module.exports=router