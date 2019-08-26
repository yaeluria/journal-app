const express = require("express");
const router = express.Router();

const Entry = require("../../models/Entry");

router.post("/new", (req, res) => {

        const newEntry = new Entry({
          title: req.body.title,
          content: req.body.content,
          author: req.body.author
        });
        newEntry
        .save()
         .then(entry => res.json(entry))
         .catch(err => console.log(err));
      }
    );

  router.get("/entries", (req,res) => {
    console.log("computing entries");
    const currentUser = req.query.userId; 
    if(currentUser){
     Entry.find({"author": currentUser})
      // Entry.find({})
      .then(entries => {
        if (!entries) {
          return res.status(404).json({ entriesnotfound: "Entries not found" });
        }
        else{
          res.json(entries);
        }
      })
    }
    else {
      res.status(404).json({error: "NO USERID"});
    }
  })
  

  module.exports = router;