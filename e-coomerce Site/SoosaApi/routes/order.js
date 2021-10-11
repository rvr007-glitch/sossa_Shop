const Order = require("../models/Order");

const { VerifyTokenAndAdmin, VerifyTokenAndAuthorization, verifyToken } = require("./VerifyToken");


const router=require("express").Router();



//CREATE
router.post("/",verifyToken, async(req,res)=>{
    const newOrder=new Order(req.body);
    try{
const savedOrder=await newCart.save();
res.status(200).json(savedO)
    }
    catch(err){
        res.status(500).json(err)
    }

})
//UPDATE
router.put("/:id",VerifyTokenAndAdmin,async(req,res)=>{
   
   try{
       const updateOrder=await Order.findByIdAndUpdate(req.params.id,{
           $set:req.body,
       },{new: true})
       res.status(200).json(updateOrder);
   }
catch(err){
    
res.status(500).json(err);
}
})
//DELETE
router.delete("/:id",VerifyTokenAndAdmin,async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted....")

    }
    catch(err){
    
        res.status(500).json(err);
        }
    

})
// GET Order
router.get("/find/:userId",VerifyTokenAndAuthorization,async(req,res)=>{
    try{
       const order= await Order.find({userId: req.params.userId});
      
        res.status(200).json(order);

    }
    catch(err){
    
        res.status(500).json(err);
        }
    

})
//GET ALL Products
router.get("/",VerifyTokenAndAdmin,async(req,res)=>{
    try{
const orders=await Order.find();
res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err);
    }
    
})
// GET MONTHLY INCOME

router.get("/income", VerifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports=router;