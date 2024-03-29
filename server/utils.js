var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

exports.sendResponse = function(response, data, statusCode){
  //statusCode = statusCode || 200;
  //response.writeHead(statusCode, headers);
  response.send(data);
};

exports.collectData = function(request, callback){
  var data = "";
  request.on('data', function(chunk){
    console.log("data!");
    data += chunk;
  });
  request.on('end', function(){
    console.log("Collected!");
    callback(JSON.parse(data));
  });
};
