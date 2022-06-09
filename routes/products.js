const express = require("express");
const productController=require("../controllers/products")
const router=express.Router()
router.get("/",productController.homeController)

router.get("/contact",productController.contactController)


router.get("/services",productController.servicesController)


module.exports=router;
