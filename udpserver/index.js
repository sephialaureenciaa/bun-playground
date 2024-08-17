const server = await Bun.udpSocket({
    port: 8888,
    socket: {
      data(socket, buf, port, addr) {
        console.log(`message from ${addr}:${port}:`)
        console.log(buf.toString())
        socket.send('helloooooooo\n', port, addr);
      } 
    }
})

console.log('UDP server listening on', server.port)