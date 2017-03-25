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

server.listen(8124, () => {
  console.log('server bound');
});