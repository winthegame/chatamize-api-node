var http = require('http');

module.exports = function (chatamizeToken) {
  return new Chatamize(chatamizeToken)
}

function Chatamize (chatamizeToken) {
    if (!chatamizeToken) {
        console.log('Please set token_chatamize in controller.spawn().');
        return;
    }
    
    var self = this
    self._chatamizeToken = chatamizeToken
  
    self.getMessage = function(data, cb) {
        dataString = '';
        dataString += 'api_key=' + self._chatamizeToken;
        
        if (!data.intent) {
            console.log("Please specify an intent!");
            return;
        }
        
        dataString += '&intent=' + data.intent;
    
        // based on https://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request
        var options = {
            host: 'www.chatamize.com',
            path: '/api/v1/message?' + dataString
        };
    
        callback = function(response) {
            var str = '';
    
            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function(chunk) {
                str += chunk;
            });
    
            //the whole response has been recieved, so we just print it out here
            response.on('end', function() {
                var payload = JSON.parse(str);
                cb(payload);
            });
        };

        http.request(options, callback).end();
    }
}
