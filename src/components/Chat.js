import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AttachFileRoundedIcon from "@material-ui/icons/AttachFileRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import MicRoundedIcon from "@material-ui/icons/MicRounded";

import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => setSeed(Math.floor(Math.random() * 9999)), []);

  const onSendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
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
        <p className="chat__message">
          <span className="chat__messageName">Mickael Choi</span>
          Salut poulette !
          <span className="chat__messageTimestamp">3:52 pm</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__messageName">Alice Travouillon</span>
          Coucou minou !<span className="chat__messageTimestamp">3:52 pm</span>
        </p>
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
