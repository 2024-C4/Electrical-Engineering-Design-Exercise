document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('menu-form');
    const chatBox = document.getElementById('chat-box');
    const inputMessage = document.getElementById('input-message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

        const message = inputMessage.value;
        addMessageToChatBox(message, 'user');

        // メッセージを処理する（ここで献立生成のロジックを追加できます）
        const responseMessage = generateMenu(message);
        addMessageToChatBox(responseMessage, 'bot');

        inputMessage.value = '';
    });

    function addMessageToChatBox(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateMenu(message) {
        // ここで実際の献立生成ロジックを実装します
        // 例: メッセージを解析して応答メッセージを生成する
        return `次の要素をふまえて料理の献立と調理方法を教えてください: ${message}`;
    }
});
