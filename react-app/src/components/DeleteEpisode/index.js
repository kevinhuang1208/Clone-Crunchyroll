import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
// import { deleteAnimeThunk } from "../../store/anime"; this will be the thunk/action to be imported
// import "./DeleteAnime.css"
import { deleteAnimeThunk } from "../../store/anime";
import { deleteEpisodeThunk } from "../../store/animeDetail"
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
const DeleteEpisodeModal = ({ episode}) => {
  const dispatch = useDispatch()
  const { closeModal } = useModal();
  const history = useHistory()
  // const animeId = singleAnime.id
  console.log("EP IN MODAL---->",episode)
  const episodeId = episode.id
  const animeId = episode.animeId
  console.log(episodeId)


  const handleClick = async (e) => {
    e.preventDefault();
    console.log(episode)
    await dispatch(deleteEpisodeThunk(episodeId))
    await dispatch(getAnimeEpisodesThunk(animeId))
    closeModal()
    // dispatch(deleteAnimeThunk(anime.id))
    //   .then(closeModal)
    // history.push("/anime")
  };

  //   useEffect(() => {
  //     dispatch(getOwnerSpots())
  // }, [dispatch, spot])

  return (
    <>
      <h1>Confirm Delete</h1>
      <div className="random-text">Are you sure you want to remove this Episode?</div>
      <div className="delete-two-buttons">
        <button onClick={(e) => handleClick(e)}>Yes (Delete Episode)</button>
        <button onClick={(e) => closeModal()}>No (Keep Episode)</button>
      </div>
    </>
  );
}

export default DeleteEpisodeModal;
