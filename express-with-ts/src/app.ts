// starting project
// console.log('Hello World');
// console.log('Express + TypeScript');

// init express
import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);    
})

// create a route
app.get('/', (req, res) => {
    return res.send('Hello Express');
})

