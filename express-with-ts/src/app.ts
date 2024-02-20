// starting project
// console.log('Hello World');
// console.log('Express + TypeScript');

// init express
import express, { NextFunction, Request, Response } from 'express';

const app = express();
const port = 3000;

// (create a post route)
app.use(express.json());

// middlware for all routes
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log('Request made to: '+ req.path);
    next();
}
app.use(showPath);

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

// sending JSON
app.get('/api/json', (req: Request, res: Response) => {
    return res.json({ 
        name: "Fabricio",
        favoriteColor: "Blue",
        message: 'Hello JSON' 
    });
})

// router parameters
app.get('/api/products/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    if (id === '1') {
        const product = {
            id: 1,
            name: 'Shoes',
            price: 100.90
        }
        return res.json(product);
    } else {
        return res.send('Product not found');
    }
})

// Complex routes
app.get('/api/products/:id/review/:reviewId', (req: Request, res: Response) => {
    const id = req.params.id;
    const reviewId = req.params.reviewId;

    console.log(req.params);
    
    return res.send(`Product ${id} with review ${reviewId}`);
})

// Router handler
function getUser(req: Request, res: Response) {
    console.log("Get user by id: "+ req.params.id);
    
    return res.send('Get user by id');
}

app.get('/api/user/:id', getUser)

// Middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === '1') {
        console.log("Passed");
        next();
    } else {
        console.log("Restricted access!");
    }
}

app.get('/api/user/:id/access', checkUser , (req: Request, res: Response) => {
    return res.json({msg:'Welcome to administrator area'});
})

// req and res with generics
app.get('/api/user/:id/details/:name', 
(req: Request<{id: string, name: string}>, res: Response<{status: boolean}>) => {
    console.log(`ID: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);
    
    return res.json({status: true});
})

// Handling errors
app.get('/api/error', (req: Request, res: Response) => {
    try {
        // logic
        throw new Error('Error');
    } catch (e: any) {
        console.log(e.message);
        return res.status(500).json({ msg: 'An error occurred' });
    }
    
})