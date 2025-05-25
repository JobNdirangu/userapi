// Import Express.js
const express = require('express');

// Create an Express application
const app = express();

// Define the port number for the server to listen on
const PORT = 3000;

// Middleware: Allow Express to parse JSON request bodies
// This is needed when making POST requests with JSON data
app.use(express.json());

// Middleware: Allow Express to parse URL-encoded request bodies
// Useful if we send data from an HTML form
app.use(express.urlencoded({ extended: true }));

// GET route for testing
// Accessible at http://localhost:3000/
app.get('/', (req, res) => {
    res.send(`
        <h1>Simple Calculator</h1>
        <form action="/calculate" method="POST">
            <input type="number" name="num1" placeholder="Enter first number"><br><br>
            <input type="number" name="num2" placeholder="Enter second number"><br><br>
            <select name="operation">
                <option value="add">Add (+)</option>
                <option value="subtract">Subtract (-)</option>
                <option value="multiply">Multiply (*)</option>
                <option value="divide">Divide (/)</option>
            </select><br><br>
            <button type="submit">Calculate</button>
        </form>
    `);
});

// POST route for handling form submission
// Receives num1, num2, and operation from the form
app.post('/calculate', (req, res) => {
    // Extract values from the request body
    const { num1, num2, operation } = req.body;

    // Convert them to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Validate input
    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).send('Please enter valid numbers.');
    }

    let result;

    // Perform the selected operation
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                return res.status(400).send('Cannot divide by zero.');
            }
            result = number1 / number2;
            break;
        default:
            return res.status(400).send('Invalid operation selected.');
    }

    // Send back the result as a simple HTML response
    res.send(`
        <h1>Result</h1>
        <p>The result of ${operation} between ${number1} and ${number2} is: <strong>${result}</strong></p>
        <a href="/">Back to Calculator</a>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Calculator app running on http://localhost:${PORT}`);
});