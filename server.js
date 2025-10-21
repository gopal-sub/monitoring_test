import express from "express";
import { logger } from './app.js'
const app = express();

app.get("/health", (req, res)=>{
    res.json({
        msg: "hih there"
    });
    logger.warn("Health point")

    return;
});

app.get('/cpu', (req, res)=>{
    let sum = 0;
    for(let i = 0; i < 100000; i++){
        sum += i;
    }

    res.json({
        sum,
    });
    logger.error("Cpu hit high");
    return;


})


app.listen(3000, ()=>{
    logger.info("Server running");
})