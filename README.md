# NodeTCPServer

To run:
```
> npm install 
> npm run bs
```
The socket will be opened on a random port. To connect, look at the console log. You will see a message similar to 
```
> opened server on { address: '::', family: 'IPv6', port: 7800 }
```
Connect to the random port by using telnet:
```
> telnet localhost 7800
```
