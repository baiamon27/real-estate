const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

router.post('/', async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).send(property);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/search', async (req, res) => {
  try{
    const {location, type, price, size} =req.query;
    const query={};
    if (location) query.location = new RegExp(location,'i');
    if (type) query.type = new RegExp(type,'i');
    if (price) query.price = { $lte:parseFloat(price) };
    if (size) query.size = new RegExp(size + '\\s*sqft', 'i');

    const properties = await Property.find(query);
    res.json(properties);
  } catch(err){
    console.error(err);
    res.status(500).json({ error: 'server error'});
  }
});



module.exports = router;
