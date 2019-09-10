(function () {
    const socketChat = document.getElementById('socket-chat');
    const socket = io(socketChat.dataset.socketurl);
    const chatWindow = document.createElement('main');
    const chatMessageInput = document.createElement('input');
    const chatSendButton = document.createElement('button');
    const sessionkey = socketChat.dataset.session;

    chatSendButton.textContent = "Send";
    socketChat.appendChild(chatWindow);
    socketChat.appendChild(chatMessageInput);
    socketChat.appendChild(chatSendButton);

    function addMessage(msg, mine = false) {
        const p = document.createElement('p');
        p.textContent = msg;
        if (mine)
            p.setAttribute('class', 'sock-chat-user-message');
        chatWindow.appendChild(p);
    }

    chatSendButton.addEventListener('click', (event) => {
        const { value: message } = chatMessageInput;
        addMessage(message, 1);
        socket.emit('new-message', { sessionkey, message });
    });
    socket.on('message-sent', addMessage);

    socket.connect(function (socket) {
        console.log('Connected!!');
    });
})();