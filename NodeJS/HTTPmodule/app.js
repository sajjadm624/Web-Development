const http = require('http');
const url = require('url');


//connection settings
const port = 3000;

//hostname ip which is associated with any device connected to a computer network
const hostname = '127.0.0.1'; //localhost

const cars = [
    {
        make: 'Audi',
        model: 'A3',
        year: '2015',
        price: 10000,
        transmission: 'Automatic',
        url: `https://images.pexels.com/photos/2394/lights-clouds-dark-car.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Mercedes',
        model: 'B Class',
        year: '2018',
        price: 20000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    },
    {
        make: 'Ford',
        model: 'Focus',
        year: '2018',
        price: 13000,
        transmission: 'Manual',
        url: `https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    }
];

//callback function
const respond = (request, response) => {
  if (request.url !== '/favicon.ico'){
   console.log(request.url);
   query = url.parse(request.url, true).query;
   pathname = url.parse(request.url, true).pathname;
   console.log(query);
   console.log(pathname);
   response.setHeader('Content-Type', 'text/plain');
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write(`<!DOCTYPE html>
                   <html lang="en" dir="ltr">
                     <head>
                       <meta charset="utf-8">
                       <title>My first Nodejs</title>
                     </head>
                 <body>`);
                 response.write('<h1>My First NodeJS App</h1>');
                 const check = car => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
                                       (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
                                       (query.year === undefined || query.year.toLowerCase() === car.year.toLowerCase()) &&
                                       (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
                                       (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
                                       (query.maxprice === undefined || parseInt(query.maxprice) >= car.price);
                 if(pathname === '/cars'){
                     cars.filter(check).forEach(car => {
                       //make, model, year, transmission, minprice, maxprice
                       response.write(`
                         <hr>
                         <img src = '${car.url}' height = '200' alt='car'>
                         <p> Make: ${car.make}</p>
                         <p> MOdel: ${car.model}</p>
                         <p> Year: ${car.year}</p>
                         <p> Transmission: ${car.transmission}</p>
                         <p> Price: $${car.price}</p>
                         `);
                     });
                 }
                 response.end(`</body>
                   </html>`);
  }
};

// creating server
const server = http.createServer(respond);

//listen to user request
server.listen(port, hostname, () => {console.log(`listening on port: ${port}, hostname: ${hostname}`)});
