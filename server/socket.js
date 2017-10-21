module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    
    socket.on('findHelp', helpee => {
      console.log(helpee);
    })
    
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
