import { auth, database } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatRoom = () => {
  const [user] = useAuthState(auth);

  const messagesRef = database.ref('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;
    const messageText = e.target.message.value;

    await messagesRef.push({
      text: messageText,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      uid,
      displayName,
      photoURL,
    });

    e.target.message.value = '';
  };

  return (
    <div>
      <div>
        {messages && messages.map((message) => (
          <ChatMessage key={message.id} message={message} user={user} />
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input name="message" placeholder="Type your message here" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const ChatMessage = ({ message, user }) => {
  const { text, uid, displayName, photoURL } = message;
  const messageClass = uid === user?.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="Profile" />
      <p>{text}</p>
      <span>{displayName}</span>
    </div>
  );
};

export default ChatRoom;
