const mongoose = require('mongoose')


mongoose.connect(process.env.DB_URL)
 .then(() => console.log('Connection to MongoDB successful'))
 .catch((err) => console.error('Error connecting to MongoDB:', err));

export default mongoose;