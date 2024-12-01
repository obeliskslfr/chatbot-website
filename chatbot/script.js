document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, 'user');
        document.getElementById('user-input').value = ""; // Clear input field
        botReply(userInput);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== "") {
            displayMessage(userInput, 'user');
            document.getElementById('user-input').value = "";
            botReply(userInput);
        }
    }
});

function displayMessage(message, sender) {
    const chatboxContent = document.getElementById('chatbox-content');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatboxContent.appendChild(messageDiv);
    chatboxContent.scrollTop = chatboxContent.scrollHeight; // Auto-scroll to the bottom
}

function botReply(userInput) {
    let botMessage = "Sorry, I didn't understand that.";

    // Simple responses for demonstration
    if (userInput.toLowerCase().includes("hello")) {
        botMessage = "Hi there! How can I help you today?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        botMessage = "I'm just a bot, but I'm doing great! Thanks for asking.";
    }

    setTimeout(() => {
        displayMessage(botMessage, 'bot');
    }, 1000); // Simulate a delay for bot reply
}
