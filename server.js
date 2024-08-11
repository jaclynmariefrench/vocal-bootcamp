const express = require('express');
const path = require('path');
const port = process.env.PORT || 5002;
const app = express();

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Route all requests to the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// const path = require('path');
// const dbPath = './api/database.json';
// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router(dbPath);
// const middlewares = jsonServer.defaults({ static: "./src" });
// const port = process.env.PORT || 5002;

// server.use(middlewares);

// server.use((req, res, next) => {
//     const isApiRoute = req.originalUrl.includes('/api/');
//     if (isApiRoute) {
//         return next();
//     }
//     return res.sendFile(path.join(__dirname, './src/index.html'));
// });

// server.use(jsonServer.rewriter({
//     '/api/*': '/$1'
// }));

// server.use(router);

// server.listen(port, () => {
//     console.log(`Application running on port ${port}`);
// });
