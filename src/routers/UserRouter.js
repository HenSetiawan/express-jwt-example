const express =require('express');
const userRouter=express.Router();
const userController=require('../controllers/UserController');

userRouter.post('/api/auth/user/login',userController.loginUser);

module.exports=userRouter;