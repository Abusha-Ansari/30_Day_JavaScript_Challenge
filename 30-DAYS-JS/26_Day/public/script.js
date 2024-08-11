const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('Connected to the server');
};

ws.onmessage = (event) => {
  appendMessageToChatBox(event.data, 'received');
};

ws.onclose = () => {
  console.log('Disconnected from the server');
};

const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    ws.send(message);
    appendMessageToChatBox(message, 'sent');
    messageInput.value = '';
  }
});

messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});

function appendMessageToChatBox(message, type) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.classList.add('message', type);
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
