const http = requiere('http');

http.createServer(function (req, res){

    res.end("Hola Mundo");

}).listen(6000);

