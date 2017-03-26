import net from 'net'
import express from 'express'

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


server.listen(5000, () => {
  console.log('opened server on', server.address());
});