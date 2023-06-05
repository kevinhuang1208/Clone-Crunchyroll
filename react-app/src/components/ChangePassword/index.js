import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
// import { deleteAnimeThunk } from "../../store/anime"; this will be the thunk/action to be imported


const ChangePasswordModal = ({user}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal();
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();


        return closeModal
        // dispatch(deleteAnimeThunk(anime.id))
        //   .then(closeModal)
        //history.push("/anime")
    };

    //   useEffect(() => {
    //     dispatch(getOwnerSpots())
    // }, [dispatch, spot])

    return (
        <>
          <h1>Change Password</h1>
          <div className="delete-two-buttons">
            <button onClick={handleClick}>Change Password</button>
          </div>
        </>
      );
}

export default ChangePasswordModal;
