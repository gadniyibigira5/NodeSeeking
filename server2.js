import { createServer } from 'http';
const port = 3000;

const users =[
    { id: 1, name: 'Gad Only'},
    { id: 2, name: 'David Only'},
    { id: 3, name: 'John Only'}
];
const server = createServer((req, res)=>{
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(users));
})

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});