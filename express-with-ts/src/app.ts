// starting project
// console.log('Hello World');
// console.log('Express + TypeScript');

// init express
import express from 'express';

const app = express();
const port = 3000;

// (create a post route)
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);    
})

// create a route
app.get('/', (req, res) => {
    return res.send('Hello Express');
})

// create a post route
app.post('/api/products', (req, res) => {
    console.log(req.body);
    return res.send('Product added');
})

