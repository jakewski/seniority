var socket = io()

function findHelp(helpee){
    socket.emit('findHelp', helpee)
    return socket.on('answerHelp', helper => {
        console.log('hit')
    })
}
