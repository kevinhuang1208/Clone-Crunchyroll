import React from "react";
import './Loading.css'

function Loading () {

  return (
    <div className="loading-container">
      <h1> Loading ... </h1>
      <img className="loading-gif"src="https://cdn.discordapp.com/attachments/1113213089702228038/1126614753930915880/0a9ea96576825e664046e7d22444dd52.gif"/>
    </div>
  )
}

export default Loading