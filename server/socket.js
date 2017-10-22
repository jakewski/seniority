const Helper = require('../models/helper')
const Helpee = require('../models/helpee')
const Jobs = require('../models/jobs')

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    
    socket.on('findHelp', helpee => {
      console.log(helpee);
      socket.emit('gotHelp');
    })

    socket.on('accepted', (jobId) => {
      io.room = jobId
      socket.join(io.room, () => {
        io.sockets.emit('beginJob', io.me.price)
      })

    })

    socket.on('signedIn', guy => {
      io.me = guy;
      guy.helper ? io.room = 'helper' : io.room = 'helpee'
      console.log(io.room)
      socket.join(io.room, () => {

      })
    })

    socket.on('newJob', job => {
      console.log('broadcasting')
      io.room = job.id
      socket.join(job.id, () => {
        io.sockets.emit('newJobski', { job: job, name: 'Bill'});
      })
    })

    // socket.on('getInfo', () => {
    //   socket.emit('gotInfo', socket.me);
    // })
    
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
