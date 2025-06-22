const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    dob: {type: Date, default: Date.now },
    password:{ type: String, required: true },
    photo: String
  });

// Employees Schema
const employeeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
  jobTitle: { type: String, required: true },
  hireDate: { type: Date, required: true },
  salary: { type: Number },
  status: { type: String, enum: ['active', 'inactive', 'on_leave'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Departments Schema
const departmentSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  managerId: { type: Schema.Types.ObjectId, ref: 'Employee', default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Department= mongoose.model('Department',departmentSchema);
const Employee= mongoose.model("Employee",employeeSchema)

module.exports={User,Department,Employee};

