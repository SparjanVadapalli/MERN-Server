const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,ggl} = require('apollo-server-express');
const app = express();
const port = 3001
const url ='mongodb+srv://spurgeonvadapalli:Dju2o3AehQ4Q2mxF@cluster0.i23kzku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const userApiFromRouter=require('./routes/userRoutes')
app.use(express.json())
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('MongoDB connected')})
.catch((err)=>{console.log(err)})
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log('server live 3001');
    })
}
function f()
{
    return 0;
}
f()
StartServer();