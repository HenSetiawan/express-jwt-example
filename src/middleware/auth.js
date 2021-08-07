const jwt =require('jsonwebtoken');
exports.auth=(req,res,next)=>{
    const token =req.headers['authorization'];
    jwt.verify(token,'rahasia',(err,userData)=>{
        if(err){
            res.json({
                message:"auth error",
                error:err
            })
        }else{
            req.userData=userData;
            next();
        }
    })
}
