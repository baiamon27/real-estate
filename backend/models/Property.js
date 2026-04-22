const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  location:String,
  type: String,
  size: String,
  imageUrl: String
}, {timestamps: true});

module.exports = mongoose.model('Property', PropertySchema);
