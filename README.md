# A simple Chatamize interface for bots
Node package for easily accessing the Chatamize.com api
Find it on npm [here](https://www.npmjs.com/package/chatamize-api-node).

[Chatamize.com](http://Chatamize.com) is a really approachable API for managing a bot's messages.

## Install

`npm install --save chatamize-api-node`

## Usage

### Initialize

    var chatamize = require('chatamize-api-node')([your token from chatamize.com/api])

### Wire up

Let's say you're making a pizza-ordering bot. One of the intents that your bot has is to ask the user what toppings she wants. So you go to chatamize.com/intents and add a few messages which can realize this intent. For example,

```
ask_toppings:
"What toppings would you like?"
"What toppings can I get for you?"
"What toppings would you like on that?"
```

Then, in your code, you can call

```
chatamize.getMessage({intent: "ask_toppings"}, function(response) {
  //response.message is the message that Chatamize proposes that you say
};
```

For example, if you're using [botkit](https://github.com/howdyai/botkit)

```
chatamize.getMessage({intent: "ask_toppings"}, function(response) {
  bot.say(response.message);
};
```

### Context

You can pass arbitrary context variables in as well. For example,

```
chatamize.getMessage({
    intent: "ask_toppings",
    username: "@rafaelcosman",
    channel: "#general",
    team: "ACME Co"
}, function(response) {
  // We'll return your message with context variables inserted into the message
  // Specify context variables that you want to use at Chatamize.com/variables
};
```

## Works well with

- [witbot](https://www.npmjs.com/package/witbot): Chatamize.com is the mouth to wit.ai's ears!
- [Botkit](https://www.npmjs.com/package/botkit): Botkit is the brain for wit.ai's ears and Chatamize.com's mouth

## Need help using this package?

Feel free to contact me at rafaelcosman@gmail.com or reach out to @rafaelcosman in dev4slack.slack.com.
