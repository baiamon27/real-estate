const mongoose = require('mongoose');
const Property = require('./models/Property');

mongoose.connect('mongodb://localhost:27017/realestate')
  .then(() => {
    console.log('Connected to MongoDB');
    return Property.deleteMany({}); 
  })
  .then(() => {
    return Property.insertMany([
      {
        title: 'Modern City Apartment',
        price: 300000,
        location: 'New York',
        type: 'Apartment',
        size: '900 sqft',
        imageUrl: 'C:\Users\Baiamonlang\OneDrive\Desktop\real estate\property2.jpg',
      },
      {
        title: 'Cozy Countryside Cottage',
        price: 150000,
        location: 'Vermont',
        type: 'Cottage',
        size: '1200 sqft',
        imageUrl: 'C:\Users\Baiamonlang\OneDrive\Desktop\real estate\property1.jpg',
      },
      {
        title: 'Luxury Beach Villa',
        price: 750000,
        location: 'Malibu',
        type: 'Villa',
        size: '2000 sqft',
        imageUrl: 'C:\Users\Baiamonlang\OneDrive\Desktop\real estate\property3.jpg',
      },
      {
        title: 'Urban Studio Flat',
        price: 220000,
        location: 'San Francisco',
        type: 'Studio',
        size: '450 sqft',
        imageUrl: 'C:\Users\Baiamonlang\OneDrive\Desktop\real estate\property4.jpg',
      }
    ]);
  })
  .then(() => {
    console.log('Sample properties inserted');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
