const express =require('express');
const postRouter=express.Router();
const postController=require('../controllers/PostController');
const auth=require('../middleware/auth');

postRouter.get('/api/posts',auth.auth,postController.getAllBooks);

module.exports=postRouter;