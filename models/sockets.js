class Sockets{

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){

        this.io.on('connection', ( socket ) => {
            //Escuchar el evento
            socket.on('mensaje-to-cliente', ( data ) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data);
            });
        });

    }

}

module.exports = Sockets;