import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
// import { deleteAnimeThunk } from "../../store/anime"; this will be the thunk/action to be imported
import "./DeleteAnime.css"
import { deleteAnimeThunk, getAllAnimeThunk } from "../../store/anime";


const DeleteAnimeModal = ({ anime }) => {
  const dispatch = useDispatch()
  const { closeModal } = useModal();
  const history = useHistory()
  // const animeId = singleAnime.id
  console.log(anime)


  const handleClick = async (e) => {
    e.preventDefault();
    await dispatch(deleteAnimeThunk(anime.id))
    await dispatch(getAllAnimeThunk())
    closeModal()
    // dispatch(deleteAnimeThunk(anime.id))
    //   .then(closeModal)
    history.push("/anime")
  };

  //   useEffect(() => {
  //     dispatch(getOwnerSpots())
  // }, [dispatch, spot])

  return (
    <>
      <h1>Confirm Delete</h1>
      <div className="random-text">Are you sure you want to remove this Anime?</div>
      <div className="delete-two-buttons">
        <button onClick={(e) => handleClick(e)}>Yes (Delete Anime)</button>
        <button onClick={(e) => closeModal()}>No (Keep Anime)</button>
      </div>
    </>
  );
}

export default DeleteAnimeModal;
