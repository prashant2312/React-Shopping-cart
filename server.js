const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const shortid = require('shortid');
const cors = require('cors')
const app = express();
const User = require('./UserSchema')
const Contact=require('./contactSchema')
const Admin=require('./adminSchema')
dotenv.config({ path: './config.env' })

app.use(express.json());


mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => { console.log('Database is connected') })
    .catch((error) => console.log(error))

const Product = mongoose.model("products", new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String]
}))
app.use(cors())

app.get('/api/products', async(req, res) => {
    const products = await Product.find({});
    res.send(products);
})
app.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
  });
app.post("/api/products", async(req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct)
})


app.post('/deleteproduct',async (req,res)=>{
    const _id=req.body;
    if(!_id){
        res.status(400).send({msg:'Please enter the id of the product'})
    }else{
        const find=await Product.findOne({_id:_id})
        if(find){
            const Delete=await find.deleteOne({})
            if(Delete){
                res.send({msg:'Product deleted'})
            }else{
                res.status(400).send({msg:"dont able to delete"})
            }
        }else{
            res.status(440).send({msg:"Id doesnot found"})
        }
    }
})


const Order = mongoose.model("order", new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    email: String,
    name: String,
    address: String,
    total: Number,
    cartItems: [{
        _id: String,
        title: String,
        price: Number,
        count: Number
    }]
}, {
    timestamps: true
}))

app.post("/api/orders", async(req, res) => {
    if (!req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems) {
        return res.send({ message: "data is required" })
    }
    const order = await Order(req.body).save();
    res.send(order)
})

app.get("/delorder",(req,res)=>{
    Order.findOneAndDelete().then((data)=>{res.status(200).send({msg:"data is remove"
    ,order:data})})
    .catch((err)=>{res.status(400).send({msg:err})})
})

// api for user

app.post('/register', async(req, res) => {
    const { name, email, phone, password, conpassword } = req.body;
    if (!name || !email || !phone  || !password || !conpassword) {
        return res.status(422).send({ msg: 'Please enter complete detail' })
    }
    const a = await User.findOne({ email: email })
    if (a) {
        return res.status(400).send({ msg: 'User already exists' });
    } else {
        const user = User({ name, email, phone, password, conpassword });
        user.save().then(() => {
                res.status(200).send({
                    msg: 'Data saved'
                })
            })
            .catch((error) => res.send(error))
    }
})
app.post('/registeradmin', async(req, res) => {
    try {
        const { name, email,  password} = req.body;
    if (!name || !email   || !password ) {
        return res.status(422).send({ msg: 'Please enter complete detail' })
    }
    const a = await Admin.findOne({ email: email })
    if (a) {
        return res.status(400).send({ msg: 'User already exists' });
    } else {
        const user = Admin({ name, email,password });
        user.save().then(() => {
                res.status(200).send({
                    msg: 'Data saved'
                })
            })
            .catch((error) => res.send(error))
    }
    } catch (error) {
        console.log(error);
    }
})


app.post('/signin', async(req, res) => {
    try {
        var token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ msg: "Please enter completer detail" });
        } else {
            const matchE = await User.findOne({ email: email });
            if (!matchE) {
                return res.status(400).send('Email does not match');
            } else {
                const matchP = await User.findOne({ password: password })
                if (!matchP) {
                    return res.status(400).send({ msg: "Password doesnot match" })
                   
                } else {
                    token = await matchE.generateAuthToken()
                    console.log(token)
                    res.cookie('jwtoken', token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly: true
                    })
                    const prod=await Order.findOne({email:email})
                    if(prod){
                        res.send(prod.cartItems)
                    }else{
                        res.send({msg:"No data found"})
                    }
                }

            }
        }

    } catch (error) {
        console.log(error)
    }

})


app.post('/signinadmin', async(req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ msg: "Please enter completer detail" });
        } else {
            const matchE = await Admin.findOne({ email: email });
            if (!matchE) {
                return res.status(400).send('Email does not match');
            } else {
                const matchP = await Admin.findOne({ password: password })
                if (!matchP) {
                    return res.status(400).send({ msg: "Password doesnot match" })
                   
                } else {
                    return res.status(200).send({ msg: 'User login ' });
                }

            }
        }

    } catch (error) {
        console.log(error)
    }

})

app.get('/logout',(req,res)=>{
    console.log("Hello logout")
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send({msg:'User logout'})
})


app.post('/suggestions',async (req,res)=>{
    const {name,email,message}=req.body;
    if(!name||!email||!message){
        res.status(400).send({msg:'Please enter complete details'});
    }else{
        const contact=Contact(req.body)
        contact.save()
        .then(()=>res.send({msg:'Data saved'}))
        .catch(error=>console.log(error))
    }
})

if(process.env.NODE_ENV==="production"){
    app.use(express.static("shopping-web/build"))
}

const port = process.env.PORT || 5000
app.listen(port, () => { console.log(`Server is listening on the port ${port}`) })