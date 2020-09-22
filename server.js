require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/items', require('./routes/items'));
//app.use('/api/purchases', require('./routes/purchases'));
app.use('/api/auth-admin', require('./routes/authAdmin'));
app.use('/api/users-admin', require('./routes/usersAdmin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));