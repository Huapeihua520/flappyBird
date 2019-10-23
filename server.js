let http = require("http");
http.createServer(function(req,res){
  res.setHeader("Content-Type","text/html;charset=utf-8");
  res.setHeader("Set-Cookie",["type=ninja","language=javascript"]);
  res.end("{status:'0',mag:'随便返回'}");
}).listen(4000);