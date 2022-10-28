//import mongoose

const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()

//add express json middleware
app.use(express.json())

//use cors middleware for http://localhost:3000
app.use(cors({
    origin: ['http://localhost:3001']
}));


//get request to product and send json response 
app.get("/products",async (req,res) => {
    const products = await Product.find({}).lean()
    res.send(products)
})

//get all the orders populated with products where status is false leaned
app.get("/orders",async (req,res) => {
    const orders = await Order.find({status:false}).populate("product").lean()
    res.send(orders)
})

//update request to change the order of specified id status to true
app.patch("/order/:id",async (req,res) => {
    const order = await Order.findByIdAndUpdate(req.params.id,{status:true})
    res.send(order)
})

//request to crete 10 dummy orders
app.get("/create",async (req,res) => {
    //delete all the orders
    await Order.deleteMany({})
    //delete all the products
    await Product.deleteMany({})
    const products = await Promise.all([
        Product.create({name:"Milk",price:100,remaining:10}),
        Product.create({name:"Bread",price:100,remaining:10}),
        Product.create({name:"Eggs",price:100,remaining:10}),
        Product.create({name:"Butter",price:100,remaining:10}),
        Product.create({name:"Cheese",price:100,remaining:10}),
        Product.create({name:"Chicken",price:100,remaining:10}),
        Product.create({name:"Beef",price:100,remaining:10}),
        Product.create({name:"Pork",price:100,remaining:10}),
        Product.create({name:"Fish",price:100,remaining:10}),
        Product.create({name:"Rice",price:100,remaining:10}),
    ])
    const orders = await Promise.all([
        Order.create({quantity:1,description:"Milk",product:products[0]._id,address:"Kampala Street F11",status:true}),
        Order.create({quantity:1,description:"Bread",product:products[1]._id,address:"Kampala Street F12",status:false}),
        Order.create({quantity:1,description:"Eggs",product:products[2]._id,address:"Kampala Street F13",status:false}),
        Order.create({quantity:1,description:"Butter",product:products[3]._id,address:"Kampala Street F14",status:false}),
        Order.create({quantity:1,description:"Cheese",product:products[4]._id,address:"Kampala Street F15",status:false}),
        Order.create({quantity:1,description:"Chicken",product:products[5]._id,address:"Kampala Street F16",status:false}),
        Order.create({quantity:1,description:"Beef",product:products[6]._id,address:"Kampala Street F17",status:false}),
        Order.create({quantity:1,description:"Pork",product:products[7]._id,address:"Kampala Street F18",status:false}),
        Order.create({quantity:1,description:"Fish",product:products[8]._id,address:"Kampala Street F19",status:false}),
        Order.create({quantity:1,description:"Rice",product:products[9]._id,address:"Kampala Street F20",status:false}),
    ])
   //get all the orders from db and populate product
    const ordersRes = await Order.find({}).populate("product").lean()
    // const ordersRes = await Order.find({}).lean()
    res.send(ordersRes)
})

//request db to to moce the status truce to n e q
app.get("/updateOrder/:id",async (req,res) => {
    //get the jwt header from the request
    
    const order = await Order.findByIdAndUpdate(req.params.id,{status:true})
    res.send(order)
})


    

//connect to mongoose
const connect = () =>
{
    return mongoose.connect("mongodb://localhost:27017/scd",{ useNewUrlParser: true , useUnifiedTopology:true})
}


const riderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
    },
    email:{
        type:String,
        required:true
    },
    vehicleInfo:{
        type:String,
        rquired:true
    }
})

//post request has the id product 

//Scheme for the student
const orderSchema = new mongoose.Schema({
   
    quantity:{
        type:Number,
        required:true
    },
    description:{type:String,required:true},
    product:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'product',
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    
    
},{timestamps:true})


//create prodcut schema with name and price

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    remaining:{
        type:Number,
        required:true
    }
})

//auto delete the order document after 20 seconds of creation if order status is false
orderSchema.pre('save', function(next) {
    var doc = this;
    setTimeout(function() {
        if(doc.description !== 'Fish'){
            Order.findByIdAndDelete(doc._id)
        }
    }, 20000);
    next();
});

// orderSchema.index({createdAt:1},{expireAfterSeconds:10})
//user will send the id of the user with the request //

const Order = mongoose.model("order",orderSchema);
const Rider = mongoose.model("rider",riderSchema);
const Product = mongoose.model("product",productSchema);


connect()
    .then(async connection =>
        {

            console.log("Connection established")

            //delete all the reacords in products
            await Product.deleteMany({})
            //delete all the reacords in orders
            await Order.deleteMany({})
    

           

            //create 10 orders with unique description and unique address
            
            //start the srver on port 3002
            app.listen(3002,() => console.log("Listening on port 3002"))
        
        })
        .catch(e => 
        {
            console.log(e)
        })


//write api to expose the db