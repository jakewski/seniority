module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    
    socket.on('findHelp', helpee => {
      console.log(helpee);
      socket.emit('gotHelp');
    })

    socket.on('signedIn', dude => {
      socket.me = dude;
      console.log(dude);
    })

    socket.on('getInfo', () => {
      socket.emit('gotInfo', socket.me);
    })
    
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
