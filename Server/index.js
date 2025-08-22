const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRoute = require('./Routes/UserRoute');

const app = express();
const port = 3000;
const db = 'mongodb+srv://Alamgir_khan:mern_project@cluster0.faft7su.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json());
app.use(cors());


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


app.use('/api/users', UserRoute);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});