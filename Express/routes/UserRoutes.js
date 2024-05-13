/**
 * Description: Express User Route
*/
import express from "express";

const router = express.Router();
router.get("/", (req,res) => {
    res.send("User Default router");
});

router.get("/fetchusers", (req,res) => {
    res.send("Fetch all the users");
});

router.post("/adduser", (req,res) => {
    //Get data from post route (req, body)
    const userdata = req.body;
    res.send(JSON.stringify(userdata));
})

export default router;