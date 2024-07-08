const User = require('./model/userSchema');//parent
const resolvers ={
    Query:{
        // getUser: async(_,{id})=>{return await User.findById(id);},
        getUsers: async(_,{id})=>{return await User.findById(id);},
        // searchUsers: async(_,{name})=>{return await User.find(
        //     {name:new RegExp(name,'i')})
        // },
        // getLimitedUsers: async(_,{limit,offset})=>{
        //     return await User.find().skip(offset).limit(limit);
        // }
    },
    Mutation: {
        createUser: async(_,{input})=>{
        try{
            const {name,emil,password}=input;
            if(!name|| !email || !password){
                throw new Error('Please enter all the fields');
            }
            // const newUser = new User(input);
            const newUser = new User({name,email,password});
            return await newUser.save();}
            catch(err){
                throw new Error(err.message);
            }

        },
        changePass: async(_,{id,password})=>{
        try{
            const userNew=await
            User.findByIdAndUpdate(id,{password :password},{new:true});
            if(!userNew){
                throw new Error('User not found');
            }
            return userNew;
        }
            catch(err){
                throw new Error(err.message);
            }
        },
        // updateUser: async(_,{id,input})=>{
        //     return await User.findByIdAndUpdate(id,input);
        // },
        // deleteUser: async(_,{id})=>{
        //     return await User.findByIdAndDelete(id);
        // }
    },
    User:{
        email:(parent)=> parent.email || '',
        name:(parent)=> parent.name || '',
        password:(parent)=> parent.password || '',
    },
};module.exports=resolvers;//export resolvers