/**
 * Description: Express Main Route
 */
import express from "express";

const router = express.Router();
router.get("/", (req,res) => {
    res.send("Main router");
});

router.get("/about", (req,res) => {
    res.send("About.");
});

export default router;