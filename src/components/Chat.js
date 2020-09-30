import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AttachFileRoundedIcon from "@material-ui/icons/AttachFileRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import "./Chat.css";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => setSeed(Math.floor(Math.random() * 9999)), []);

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
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
