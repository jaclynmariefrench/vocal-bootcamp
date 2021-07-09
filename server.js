const path = require('path');
const dbPath = './api/database.json';
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults({ static: "./src" });
const port = process.env.PORT || 5002;

server.use(middlewares);

server.use((req, res, next) => {
    const isApiRoute = req.originalUrl.includes('/api/');
    if (isApiRoute) {
        return next();
    }
    return res.sendFile(path.join(__dirname, './src/index.html'));
});

server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}));

server.use(router);

server.listen(port, () => {
    console.log(`Application running on port ${port}`);
});
