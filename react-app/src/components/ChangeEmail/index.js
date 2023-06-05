import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
// import { deleteAnimeThunk } from "../../store/anime"; this will be the thunk/action to be imported


const ChangeEmailModal = ({user}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal();
    const history = useHistory()
    const [email, setEmail] = useState(user.email)

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

        const newEmail = {
          email
        }

        // await dispatch(createReview(newReview, spot.id)) this will be the edit email thunk
        //   .then(closeModal)


      }

    return (
        <>
          <h1>Change Email</h1>
          <h3>Current Email: {user.email}</h3>
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <div className="delete-two-buttons">
            <button onClick={handleClick}>Change Email</button>
          </div>
        </>
      );
}

export default ChangeEmailModal;
