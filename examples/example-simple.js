chatamize = require('../')(process.env.token_chatamize);

chatamize.getMessage({intent: "ask_toppings"}, function(response) {
    console.log(response.message);//response.message is the message that Chatamize proposes that you say
});