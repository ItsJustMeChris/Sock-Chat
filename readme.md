# Sock Chat

Sock Chat is a full-stack chat live chat library, ready to be set-up and embedded into your website! The goal is to require as little configuration as possible, reusing your applications sessions and users!

## Installation (Server)

Use the package manager [npm](https://www.npmjs.com/) to install Sock-Chat.

```bash
npm i sock-chat
```
## Installation (Client)
### Prerequisites
You will need [socket.io](https://socket.io)
### Usage
```html
    <section id="socket-chat" 
      data-socketurl="(YOUR SOCKET URL) ex: http://localhost:3000" 
      data-sessionkey="(Users Session Key/Post Key) ex: foobarkey"
    ></section>

    <script src="./dist/js/socket.io.js"></script>
    <script src="./dist/js/sock.chat.client.js"></script>

```

## Usage Windows (Power Shell)

```js
$env:dbtype = "postgres";
$env:dbname = "myapp";
$env:dbuser = "appuser";
$env:dbpass = "appuser_password";
$env:dbhost = "localhost";
$env:dbport = "3113";
$env:socketport = "3000";
//Start the socket server
node core.js
```
## Usage Linux
```js
dbtype = "postgres";
dbname = "myapp";
dbuser = "appuser";
dbpass = "appuser_password";
dbhost = "localhost";
dbport = "3113";
socketport = "3000";
//Start the socket server
node core.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)