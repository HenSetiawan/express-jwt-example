const express = require('express');
const app =express();
const postRouter=require("./src/routers/PostRouter");
const userRouter=require('./src/routers/UserRouter');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',postRouter);
app.use('/',userRouter);



app.listen(3000,()=>console.log(`server running on port 3000`));