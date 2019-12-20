const express = require('express');
const Dictionary = require('../db/models/Dictionary');

const router = new express.Router();

// Create a new dictionary
router.post('/dictionarys', async (req, res) => {
  const dictionary = new Dictionary({
    dictionary: req.body
  });

  try {
    await dictionary.save();
    res.status(201).send(dictionary);

  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all dictionaries
router.get('/dictionarys', async (req, res) => {
  try {
    const dictionaries = await Dictionary.find({})
    if (!dictionaries) {
      res.json("No dictionaries yet, please create one.")
    }

    res.send(dictionaries)

  } catch (error) {
    res.status(500).send()
  }
})

// Get one dictionary
router.get('/dictionarys/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const dictionary = await Dictionary.findOne({ _id });

    if (!dictionary) {
      return res.status(404).send();
    }

    res.status(200).send(dictionary);

  } catch (err) {
    res.status(500).send(err);
  }
});


// Update a dictionary
router.patch('/dictionarys/:id', async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const dictionary = await Dictionary.findOne({
      _id: req.params.id,
    });
    if (!dictionary) {
      return res.status(404).send();
    }
    updates.forEach(update => {
      dictionary[update] = req.body[update];
    });

    await dictionary.save();

    res.status(201).send(dictionary);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a dictionary
router.delete('/dictionarys/:id', async (req, res) => {
  try {
    const dictionary = await Dictionary.findOneAndDelete({
      _id: req.params.id,
    });

    if (!dictionary) {
      return res.status(404).send();
    }
    res.send(dictionary);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router