import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";

import Avatar from "@material-ui/core/Avatar";

import "./SidebarChat.css";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => setSeed(Math.floor(Math.random() * 9999)), []);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const onCreateChat = () => {
    const roomName = prompt("Please enter a name for this new chat room");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  console.log(messages);

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={onCreateChat}>
      <h2>Add new chat room</h2>
    </div>
  );
}

export default SidebarChat;
