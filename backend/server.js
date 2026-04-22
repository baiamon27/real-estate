
const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

mongoose.connect('mongodb://localhost:27017/realestate',{
});


const propertyRoutes=require('./routes/properties');
app.use('/api/properties',propertyRoutes);

const authRoutes=require('./routes/auth');
app.use('/api/auth',authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});