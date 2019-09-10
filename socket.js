const server = require('http').createServer();
const io = require('socket.io')(server, {
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

const cachedSessions = [];

const isValidSession = (sessionKey) => /*Query database*/ true;
const isCached = (sessionKey) => cachedSessions.includes(sessionKey);

io.on('connection', function (socket) {
    socket.on('new-message', function (msg) {
        const { sessionkey, message } = msg;
        if (isCached(sessionkey) || isValidSession(sessionkey)) {
            if (!isCached(sessionkey)) {
                cachedSessions.push(sessionkey);
                console.log('caching');
            }
            socket.broadcast.emit('message-sent', message);
        }
    });
});

console.log(`Sockets listening on http://localhost:${process.env.socketport}`);
server.listen(process.env.socketport);