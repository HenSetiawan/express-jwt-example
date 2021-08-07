const jwt = require('jsonwebtoken');
exports.loginUser=(req,res)=>{
    const listusers=[
        {
            email:"hendy@gmail.com",
            password: "lavender"
        },
        {
            email:"budi@gmail.com",
            password: "budi"
        }
    ]

   const user=listusers.find(userItem=>userItem.email==req.body.email);
   console.log(user);
    if(user!=undefined && user.password==req.body.password){
        jwt.sign({ user}, "rahasia", (err, token)=> {
            res.json({
                user,
                token:token
            })
        });
    }else{
        res.json({
            message:"email or password wrong",
            email:req.body.email
        })
    }




}