const messageInput = document.getElementById('message');
const chatMessages = document.getElementById('chat-messages');
const sendButton = document.getElementById('send');

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();

    if (message !== '') {
        appendMessage(message);
        messageInput.value = '';
    }
}

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom to show the latest messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
