# 👥 User API

A simple Node.js REST API for managing users — built with **Express**, **MongoDB**, and **Mongoose**. This project is ideal for learning and teaching CRUD operations in a MERN environment.


## 🚀 Features

- Create a new user
- Read (view) user data
- Update existing users
- Delete users
- Connected to MongoDB using Mongoose
- JSON-based API for easy integration with frontend frameworks (React, Vue, etc.)



## 🛠️ Tech Stack

| Tool         | Description                        |
|--------------|------------------------------------|
| Node.js      | JavaScript runtime                 |
| Express      | Web framework for Node.js          |
| MongoDB      | NoSQL database                     |
| Mongoose     | MongoDB object modeling for Node.js |
| dotenv       | Environment variable management    |

---

## 📁 Project Structure

userapi/
├── routes/
│ └── users.js # All API routes for user actions
├── models/
│ └── User.js # Mongoose schema for users
├── app.js # Entry point for the server
├── .env # MongoDB connection URI and PORT
├── package.json
└── README.md


## 🧪 API Endpoints

| Method | Route             | Description            |
|--------|------------------|------------------------|
| GET    | `/api/users`      | Get all users          |
| GET    | `/api/users/:id`  | Get a single user by ID|
| POST   | `/api/users`      | Create a new user      |
| PUT    | `/api/users/:id`  | Update a user by ID    |
| DELETE | `/api/users/:id`  | Delete a user by ID    |


## 🧑‍💻 Sample JSON Request

**POST `/api/users`**

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}

## ⚙️ Installation & Setup
## Clone the repo
  git clone https://github.com/JobNdirangu/userapi.git
  cd userapi
## Install dependencies
  npm install
  npm install express dotenv cors bycript jsonwebtoken mongoose
   
## Configure environment variables
Create a .env file in the root directory:
  MONGO_URI=mongodb://127.0.0.1:27017/usersdb
  PORT=3000

## Start the server
  node app.js

## 🧭 Usage
  Use Insomnia to test the API.

Connect your frontend to /api/users.

## 📌 Notes
Ensure MongoDB is running locally on your machine.

You can modify the User model in models/User.js to add more fields.

## 📚 Educational Use
This project is perfect for:
Beginner MERN stack learners

API integration practice

📄 License
MIT — feel free to use and modify.
## add user screenshot
![image](https://github.com/user-attachments/assets/7f6f58fc-7491-40d9-9890-26e81df0c83d)

## get users screenshots
![image](https://github.com/user-attachments/assets/ab55316b-609f-4133-bd59-53b53f966c7a)

## update user
update uses put request and must have id params and a body
![image](https://github.com/user-attachments/assets/3d1beed3-7497-43ed-8dd1-5fa2942a7989)

## get user
requires a id param
![image](https://github.com/user-attachments/assets/c292a312-9619-4af1-869f-c327f27f518e)

## delete user
![image](https://github.com/user-attachments/assets/bc6cf21d-a278-413a-84a2-d3ce1bbfb5f6)


