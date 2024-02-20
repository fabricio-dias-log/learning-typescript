// starting project
// console.log('Hello World');
// console.log('Express + TypeScript');

// init express
import express, { Request, Response } from 'express';

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

// create route for all verbs
app.all('/api/products/check', (req, res) => {
    if (req.method === 'POST') {
        return res.send('Post some register');
    } else if (req.method === 'GET') {
        return res.send('Read some register');
    } else {
        return res.send('Cannot process this request');
    }
})

// interfaces of express
app.get('/api/interfaces', (req: Request, res: Response) => {
    return res.send('Using interfaces');
})

