const express = require('express');
const cors = require('cors');

const routes = require('./routes/task.route.js')

class Server{
    constructor(port){
        this.port = port;
        this.api = express();
        this.initRoute();
    }
    initServer(){
        this.api.listen(this.port, ()=>{
            console.log("Iniciando Servicio "+this.port);
        });
    }
    initRoute(){
        this.api.use("/api/v1", routes);
    }
}

module.exports = Server