import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { log } from "console";
import mongoose from "mongoose";

const port = 4000;

const app = express();


app.use(express.json())
app.use(cors())

//database connection 
mongoose.connect("mongodb+srv://nalakadinesh12:dinesh532@cluster0.cm5mmzw.mongodb.net/nike")

// Api creation
app.get("/",(req,res)=>{
    res.send("Done and Dusted")
})

const storage = multer.diskStorage({
    destination:'./upload/image',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//creating upload image
app.use('/image',express.static('upload/image'))
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url: `https://nike-clone-app.onrender.com/image/${req.file.filename}`
    })
})

//schema
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },

})

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0];
        id = last_product.id+1
    }else{
        id=1;
    }
    const product = new Product({
        id: id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//remove product
app.post("/removeproduct",async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.name,
    })
})
//API for retrieve product 
app.get('/allproduct',async (req,res)=>{
    let products = await Product.find({});
    console.log("all product fetch");
    res.send(products)
})


//Scheme for user model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }


})

//api for register the user

app.post('/signup',async (req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
       return res.status(400).json({
        success:false,
        errors:"user is existing ..",
       })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({
        success:true,
        token
    })
})
// user login
app.post('/login',async (req,res)=>{
    

    let user = await Users.findOne({
        email:req.body.email,
    })
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({
                success:true,
                token
            })
        }else{
            res.json({
                success:false,
                errors:"wrong password",
            });
        }
    }else{
        res.json({
            success:false,
            errors:"wrong email",
        })
    }
})


//new collection data

app.get('/newcollection',async (req,res)=>{
    let product = await Product.find({});
    let newcollection = product.slice(1).slice(-8);
    res.send(newcollection);
})

//POPULAR IN MEN   

app.get('/popularinmen', async (req,res)=>{
    let product = await Product.find({
        category:"men"
    })
    let popularinmen = product.slice(0,4);
    res.send(popularinmen);
})
//creating middleware to fetch user

const fetchuser = async (req,res,next)=> {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"please authenticate using valid token"})
        }
    }
}

//cart add

app.post('/addtocart',fetchuser,async (req,res)=>{
    let userData = await Users.findOne({ _id:req.user.id})

    const itemId = parseInt(req.body.itemId);
    console.log(itemId);
    userData.cartData[itemId] += 1;
    const updateObject = {cartData: userData.cartData}
    await Users.findOneAndUpdate({_id:req.user.id},updateObject)
    console.log("add")
    res.send("added")
})

//remove product from cart

app.post('/removefromcart',fetchuser, async (req,res)=>{
    let userData = await Users.findOne({ _id:req.user.id})

    const itemId = parseInt(req.body.itemId);
    if(userData.cartData[itemId]>0)
    userData.cartData[itemId] -= 1;
    const updateObject = {cartData: userData.cartData}
    await Users.findOneAndUpdate({_id:req.user.id},updateObject)
    console.log("removed")
    res.send("removed")
})
//get cart data

app.post('/getcart',fetchuser,async (req,res)=>{
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData);
})

app.listen(port,(err)=>{
    if(!err){
        console.log(`Server run on port ${port} with modify`)
    }else{
        console.log(err)
    }
})