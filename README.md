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

Then, in your code, 
For example, if you're using [botkit](https://github.com/howdyai/botkit)

```
chatamize.getMessage({intent: "ask_toppings"}, function(response) {
  bot.say(response.message);
}
```

## Works well with

[witbot](https://www.npmjs.com/package/witbot): Chatamize.com is the mouth to wit.ai's ears!
[Botkit](https://www.npmjs.com/package/botkit): Botkit is the brain for wit.ai's ears and Chatamize.com's mouth
