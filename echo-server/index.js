const net = require('net');

const server = net.createServer((socket) => {
    console.log('client connected!');

    socket.on('data', (data) => {
        console.log(`Data received: ${data.toString()}`);
    })
    socket.pipe(socket)
});

server.listen({ port: 8000 }, () => {
  console.log(`server listening on ${server.address().port}`);
})
