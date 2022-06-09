const express=require("express");
const bodyParser=require("body-parser");
const productRoutes=require("./routes/products")
const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set("view engine","ejs")

app.use(productRoutes)


app.listen(8000,()=>
{
    console.log("listening at 8000");
})