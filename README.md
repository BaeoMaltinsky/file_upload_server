Quick five minute server for getting files off an old clamshell iBook G3 running Mac OS 9.2.2

1. Get LAN IP 

```bash
$ ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1'
```

2. Run server

```
$ node server.js
```

3. Connect to server from client at `http://[LAN IP]:3000`

Files will be saved in `./uploads`
