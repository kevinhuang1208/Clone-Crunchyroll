import React from "react";
import { useHistory } from "react-router-dom";
import './PageNotFound.css'

function PageNotFound() {
  const history = useHistory()

  return (
    <div className="not-found">
      <h1 className="lost-code"> 404:</h1>
      <h3 className="lost-quote"> Looks like you're lost...</h3>
      <img className='lost-img' src="https://cdn.discordapp.com/attachments/1113213089702228038/1129183926775205980/preview-naruto-gif-wallpaper-1920-1080px-4.gif" />
      <h3>Click <span className='lost-redirect-home' onClick={()=> history.push('/anime')}>here</span> to be redirected to the home page</h3>
    </div>
  )
}

export default PageNotFound