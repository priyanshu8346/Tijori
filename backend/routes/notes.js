const express = require('express');
const { required } = require('nodemon/lib/config');
const fetchUser = require('../middleWare/fetchUser');
const router = express.Router();
const Notes = require("../models/Notes");
const { body, validationResult } = require('express-validator');


// route 1: for getting all the notes from database login required 
// since login required middleware is also requires 
router.get('/fetchAllNotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.id });
        res.json(notes);
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }

})


// route 2 add notes login required 
const arr = [body('title','Title should be more than 3 letters').isLength({ min: 3 }),
 body('description','description should be of minimum 3 letters').isLength({ min: 3 })]

router.post('/addNote', fetchUser, arr, async (req, res) => {
    // if there are errors return error
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // destructuring 
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.id
        })
        const savedNotes = await note.save();
        res.send(savedNotes);
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }

})

// route 3 update existing notes using id login required

router.put('/updateNote/:id', fetchUser, arr, async (req, res) => {
    // if there are errors return error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        // destructuring 
        const { title, description, tag } = req.body;
        // first we need to check weather the person upadating the node owns the note or not

        const note = await Notes.findById(req.params.id);
        if(!note){
          return  res.status(404).send("Not found");
        }
        if(note.user.toString() !== req.id){
           return res.status(401).send("not authorised")
        }

        // create a new note objectt 
       const newNote={};
       if(title){newNote.title=title;}
       if(description){newNote.description=description;}
       if(tag){newNote.tag=tag;}

       const updatedNote = await Notes.findByIdAndUpdate(req.params.id , newNote);
       res.send(updatedNote);

    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }

})

// route 4 to delete document login required 

router.delete('/deleteNote/:id', fetchUser, async (req, res) => {
    // if there are errors return error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        // destructuring 
        // const { title, description, tag } = req.body;

        // it is to check weather that note exist or not 
        const note = await Notes.findById(req.params.id);
        if(!note){
          return  res.status(404).send("Not found");
        }
        // we need to check weather the person deleting the node owns the note or not

        if(note.user.toString() !== req.id){
           return res.status(401).send("not authorised")
        }

        // create a new note objectt 

       const deleteNote = await Notes.findByIdAndDelete(req.params.id);
       res.send(deleteNote);

    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }

})


module.exports = router