const express = require('express');
const router = express.Router();
const { Employee, Department } = require('../models/model'); // Adjust path to your models file

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const { userId, firstName, lastName, email, departmentId, jobTitle, hireDate, salary, status } = req.body;
    
    // Validate departmentId exists
    const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(400).json({ error: 'Invalid departmentId' });
    }

    const employee = new Employee({
      userId,
      firstName,
      lastName,
      email,
      departmentId,
      jobTitle,
      hireDate,
      salary,
      status,
    });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate('userId', 'name email')
      .populate('departmentId', 'name');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single employee by ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('departmentId', 'name');
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an employee
router.put('/:id', async (req, res) => {
  try {
    const { userId, firstName, lastName, email, departmentId, jobTitle, hireDate, salary, status } = req.body;
    
    // Validate departmentId if provided
    if (departmentId) {
      const department = await Department.findById(departmentId);
      if (!department) {
        return res.status(400).json({ error: 'Invalid departmentId' });
      }
    }

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { userId, firstName, lastName, email, departmentId, jobTitle, hireDate, salary, status, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;