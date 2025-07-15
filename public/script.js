const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addLoadingMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message loading';
    messageDiv.textContent = 'AI is thinking';
    messageDiv.id = 'loading-message';
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
}

function removeLoadingMessage() {
    const loadingMessage = document.getElementById('loading-message');
    if (loadingMessage) {
        loadingMessage.remove();
    }
}

async function sendMessage() {
    const prompt = messageInput.value.trim();
    if (!prompt) return;

    addMessage(prompt, true);
    messageInput.value = '';
    sendButton.disabled = true;
    
    const loadingMessage = addLoadingMessage();

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        
        removeLoadingMessage();

        if (response.ok) {
            addMessage(data.response);
        } else {
            addMessage(`Error: ${data.error || 'Something went wrong'}`);
        }
    } catch (error) {
        removeLoadingMessage();
        addMessage(`Error: ${error.message}`);
    }

    sendButton.disabled = false;
    messageInput.focus();
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

messageInput.focus(); 