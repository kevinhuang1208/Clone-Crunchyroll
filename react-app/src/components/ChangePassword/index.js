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
    const [password, setPassword] = useState(user.password)

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

    const handleSubmit = async (e) => {
      e.preventDefault();

      const newPassword = {
        password
      }

      // await dispatch(createReview(newReview, spot.id)) this will be the edit email thunk
      //   .then(closeModal)


    }

    return (
      <>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="new password"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="confirm new password"
        />
      </form>
      <div className="delete-two-buttons">
        <button onClick={handleClick}>Change Password</button>
      </div>
    </>
      );
}

export default ChangePasswordModal;
