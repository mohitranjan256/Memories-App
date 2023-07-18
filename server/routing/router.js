import { Router } from "express";


const router = Router();

router.get("/", (req,res)=>{
    try{
        res.send("Welcome to Memories-App-API");
    }
    catch(err){
        console.error();
    }
});


export default router;