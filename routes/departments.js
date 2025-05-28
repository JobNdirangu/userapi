const express = require('express');
const router = express.Router();
const { Department } = require('../models/model'); 

// Create a new department
router.post('/', async (req, res) => {
  try {
    const { name, description, managerId } = req.body;
    const department = new Department({ name, description, managerId });
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find().populate('managerId', 'firstName lastName');
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single department by ID
router.get('/:id', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id).populate('managerId', 'firstName lastName');
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a department
router.put('/:id', async (req, res) => {
  try {
    const { name, description, managerId } = req.body;
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      { name, description, managerId, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a department
router.delete('/:id', async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;