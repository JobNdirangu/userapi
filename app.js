const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
require('dotenv').config();

const app = express();
// middleware
app.use(express.json());
app.use(cors());  //allow frontend to connect

app.use('/uploads', express.static('uploads'));  //make the images accessible

// Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const employeeRoutes=require('./routes/employees')
app.use('/api/employees', employeeRoutes);

const departmentRoutes=require('./routes/departments')
app.use('/api/departments', departmentRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



