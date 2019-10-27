const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");

/**
 * Deletes an item
 */
router.delete("/items/:itemId", (req, res) => {
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        } 
        console.log("Deletion successful");
        return res.sendStatus(204);
    })
});

/**
 * Create a new item
 */
router.post("/items", (req, res) => {
    const props = {
        imgSrc: "example.invalid",
        title: "phone red",
        price: 200,
        category: "phones"
    };
    
    const item1 = new Item(props);
    item1.save (err => {
        if(err){
            console.log("Error: ", err);
            res.sendStatus(500);
            return;
        }
        console.log("Success createItem");
        res.sendStatus(201);
    });
});

/**
 * Returns an item
 */
router.get("/items/:itemId",(req, res)=>{
    Item.findById(req.params.itemId, function(err, item) {
        if(err){
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
});

/**
 * Returns all items
 */
router.get("/items",(req, res)=>{
    Item.find({}, function(err, items){
        if(err){
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(items);
    });
});

module.exports = router;