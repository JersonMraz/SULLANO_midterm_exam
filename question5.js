const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

//Set up the Sequelize
const sequelize = new Sequelize('AHHHH DI MA CONNECT SIR (ARTE ANG ADMIN DI PA PASSWORD)');

//User model
const User = sequelize.define('User', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  email: {type: DataTypes.STRING, allowNull: false,unique: true},
  status: {type: DataTypes.STRING, allowNull: true,}
});

// Initialize the express app
const app = express();

// Define route /users
app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

// Sync sequelize models
sequelize.sync()
  .then(() => {
    // Start server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(error => console.log('Error syncing database: ', error));
