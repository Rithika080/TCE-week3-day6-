const express = require("express")
const mongoose = require("mongoose")
const routes = require("./Routes/routes.js")

const app = express();
app.use(express.json());
app.use("/",routes);
//DB Connection
mongoose.connect(
    "mongodb+srv://nihmatulain2003:XhdLaTIOASswU22o@cluster0.0thuxir.mongodb.net/test"
).then(()=>{
    console.log("Data is connected successfully");
})
.catch((err)=>{
    console.log(err,"Something went Wrong");
});

//Test API
app.get("/test",(req,res)=>{
    res.send("Hello Everyone, this is test API ");
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});