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
  router.get("/delete", (req,res) => {
    const entryToBeDeleted = req.query.entryId; 
   if (entryToBeDeleted){
     Entry.findByIdAndDelete(entryToBeDeleted)
      .then(result => {
        console.log(result);
        if (!result) {
          return res.status(404).json({ entriesnotfound: "Entries not found" });
        }
        else{
          res.json({succes: "true"});
        }
      })
    }
    else {
      res.status(404).json({error: "NO USERID"});
    }
  })

  router.post("/edit", (req,res) => {
    const entryToBeEditedId = req.query.entryId;
    const updatedData = req.query.updatedData 
   if (entryToBeEditedId && updatedData){
     Entry.findOneAndUpdate({_id: entryToBeEditedId},updatedData,{
      returnNewDocument: true
     })
      .then(result => {
        console.log(result);
        if (!result) {
          return res.status(404).json({ entryNotUpdated: "Entry not updated" });
        }
        else{
          res.json({succes: "true"});
        }
      })
    }
    else {
      if(!entryToBeEditedId){
      res.status(404).json({error: "NO ENTRY ID"});
      }
      if(!updatedData){
        res.status(404).json({error: "NO DATA TO UPDATE"});
        }
    }
  })
  module.exports = router;