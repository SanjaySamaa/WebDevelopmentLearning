const middlewarePasswordChecker = (req,res,next)=>{
    let password = req.body.password;
    next();
    if(password === savedPassword){
        isVerified = true;
    }
}; 