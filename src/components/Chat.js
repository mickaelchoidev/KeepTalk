import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { useStateValue } from "../context/StateProvider";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AttachFileRoundedIcon from "@material-ui/icons/AttachFileRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";

import "./Chat.css";

function Chat() {
  const { roomId } = useParams();

  const [seed, setSeed] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => setSeed(Math.floor(Math.random() * 9999)), [roomId]);

  const onSendMessage = (e) => {
    e.preventDefault();
    console.log(input);

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last seen at{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton>
            <AttachFileRoundedIcon />
          </IconButton>
          <IconButton>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            key={message.id}
            className={`chat__message ${
              message.name === user.displayName && "chat__reciever"
            }`}
          >
            <span className="chat__messageName">{message.name}</span>
            {message.message}
            <span className="chat__messageTimestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonRoundedIcon />
        </IconButton>
        <form>
          <input
            type="text"
            placeholder="Enter your message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={onSendMessage}>
            Send
          </button>
        </form>
        <IconButton>
          <MicRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
