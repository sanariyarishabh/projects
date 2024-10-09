const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./schema');

// Connect to MongoDB
mongoose.connect("mongodb+srv://Rishbh20:RishbhaS24@cluster0.ab3fm.mongodb.net/Todo")
.then(()=>{
        console.log("Database is Connected");
        const app = express();
        app.use(cors());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended : true}));

        // Define routes
        app.get('/', async (req, res) => {
                const data = await Todo.find();
                res.send(data);
    
        });

        app.put("/update/:id", async (req, res) => {
            const { id } = req.params;
            const up = await Todo.findByIdAndUpdate({ _id: id }, { complete: true }, { new: true })
                .catch(err => res.status(500).send(err));
            
            res.json(up);
        });

        app.post("/add", async (req, res) => {
            const newList = new Todo({...req.body});
            const savedList = await newList.save();
            res.send(savedList);
        });

        app.delete('/delete/:id', async (req, res) => {
            const { id } = req.params;
            const del = await Todo.findOneAndDelete({ _id: id }).catch(err => res.status(500).send(err));
            
            res.send(del);
        });

        app.listen(4000, () => {
            console.log('Server is running at PORT 4000');
        });
    })