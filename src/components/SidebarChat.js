import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";

import "./SidebarChat.css";

function SidebarChat() {
  const [seed, setSeed] = useState("");

  useEffect(() => setSeed(Math.floor(Math.random() * 9999)), []);

  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
