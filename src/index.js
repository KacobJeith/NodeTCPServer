import net from 'net'

const server = net.createServer((sock) => {
  // 'connection' listener
  console.log('client connected');

  sock.on('end', () => {
    console.log('client disconnected');
  });
  
  sock.write('hello\r\n');
  sock.pipe(sock);
});

server.on('error', (err) => {
  throw err;
});

// grab a random port.
server.listen(() => {
  console.log('opened server on', server.address());
});