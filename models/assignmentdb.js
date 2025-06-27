// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   name: String,
//   email: { type: String, required: true, unique: true },
//   dob: { type: Date, default: Date.now },
//   password: { type: String, required: true },
//   photo: String
// });


// const employeeSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', default: null }, // who created the employee
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   jobTitle: { type: String, required: true },
//   hireDate: { type: Date, required: true },
//   status: { type: String, enum: ['active', 'inactive', 'on_leave'], default: 'active' },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });


// const taskSchema = new Schema({
//   name: { type: String, required: true },          // task name
//   description: { type: String },                   // what the task is about
//   assignedTo: { type: Schema.Types.ObjectId, ref: 'Employee', required: true }, // employee assigned
//   timeAssigned: { type: Date, default: Date.now }, // when task was assigned
//   status: { type: String, enum: ['To Do', 'In Progress', 'Done'], default: 'To Do' }
// });


// const User = mongoose.model('User', userSchema);
// const Employee = mongoose.model('Employee', employeeSchema);
// const Task = mongoose.model('Task', taskSchema);

// module.exports = { User, Employee, Task };