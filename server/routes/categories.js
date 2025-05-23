const express = require("express");
const BookCategory = require("../models/BookCategory");
const router = express.Router();

router.get("/allcategories", async (req, res) => {
    try {
      const categories = await BookCategory.find({});
      res.status(200).json(categories);
    } catch (err) {
      return res.status(504).json(err);
    }
  });
  
router.post("/addcategory", async (req, res) => {
    try {
      const newcategory = await new BookCategory({
        categoryName: req.body.categoryName,
      });
      const category = await newcategory.save();
      res.status(200).json(category);
    } catch (err) {
      return res.status(504).json(err);
    }
  });

module.exports=router;