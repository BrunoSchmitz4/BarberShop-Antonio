var http = require('http');

http.createServer(function(req, res){
    res.end("Pagina login carregada com sucesso");
}).listen(8080);
