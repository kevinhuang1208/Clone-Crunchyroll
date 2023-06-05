import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
// import { deleteSpot, getOwnerSpots } from "../../store/spots"; this will be the thunk/action to be imported
import "./DeleteAnime.css"


const DeleteAnimeModal = () => { //{anime} inside params,will have access via componentin animeDetail
    const dispatch = useDispatch()
    const { closeModal } = useModal();

    const handleClick = (e) => {
        e.preventDefault();


        return closeModal
        // dispatch(deleteSpot(spot.id)) replace
        //   .then(closeModal)
    };

    //   useEffect(() => {
    //     dispatch(getOwnerSpots())
    // }, [dispatch, spot])

    return (
        <>
          <h1>Confirm Delete</h1>
          <div className="random-text">Are you sure you want to remove this Anime?</div>
          <div className="delete-two-buttons">
            <button onClick={handleClick}>Yes (Delete Anime)</button>
            <button onClick={closeModal}>No (Keep Anime)</button>
          </div>
        </>
      );
}

export default DeleteAnimeModal;
