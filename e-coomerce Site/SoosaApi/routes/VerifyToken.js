
const jwt=require("jsonwebtoken")
const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
if(authHeader){
    const token=authHeader.split(" ")[1];
jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
    if(err) res.status(403).json("Token is Not Valid!")
    req.user=user;
    next();
})
}
else{
    return res.status(401).json("you are not Authenthicated")
}

};
const VerifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id == req.params.id||req.user.isAdmin){
            console.log("put");
            next();
        }
        else{
            return res.status(403).json("you are not Authorized to do that!")
        }

    })
}
const VerifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            console.log("put");
            next();
        }
        else{
            return res.status(403).json("you are not Authorized to do that!")
        }

    })
}
module.exports={verifyToken, VerifyTokenAndAuthorization,VerifyTokenAndAdmin};
