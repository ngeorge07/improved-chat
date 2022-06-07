import { useState, useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";

import colRef from "./utils/initializeFirebase";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(colRef, orderBy("createdAt", "desc"));
    const snapshot = onSnapshot(q, (snapshot) =>
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return snapshot;
  }, []);

  return (
    <div>
      <h1 className="text-pink-600">Hello world from code spaces</h1>
      {messages.map((message) => (
        <p key={message.id}>{message.text}</p>
      ))}
    </div>
  );
}

export default App;
