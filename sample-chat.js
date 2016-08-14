var config = {
    // Add Firebase credentials here
};

firebase.initializeApp(config);

firebase.database().ref("/messages").on('child_added', function(snapshot){
    var newMessage = snapshot.val();
    var board = document.getElementById('board');
    var message = document.createElement('div')
    var text = document.createTextNode(newMessage.author + ': ' + newMessage.message);
    message.appendChild(text);
    board.appendChild(message);
});

function send(){
    var message = document.getElementById('message').value;
    var author = document.getElementById('author').value;

    firebase.database().ref("/messages").push({author: author, message: message});
}
