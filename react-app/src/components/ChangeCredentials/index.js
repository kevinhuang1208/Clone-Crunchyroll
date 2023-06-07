import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { editSingleUserThunk } from "../../store/user"
import { editSingleUser } from "../../store/session"


const ChangeCredentialModal = ({user}) => {
    const dispatch = useDispatch()
    const { closeModal } = useModal();
    const history = useHistory()
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // const handleClick = (e) => {
    //     e.preventDefault();


    //     return 
    //     dispatch(editSingleUserThunk(user, user.id))
    //       .then(closeModal)
        
    // };

    //   useEffect(() => {
    //     dispatch(getOwnerSpots())
    // }, [dispatch, spot])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", password)

        let res = await dispatch(editSingleUserThunk(formData, user.id))
        dispatch(editSingleUser(res))
        if (res) {
          history.push(`/anime/${res.id}`)
      }


      }

    return (
        <>
          <h1>Change Your Account Information</h1>
          <form onSubmit={handleSubmit}>
            <h3>Current Username: {user.username}</h3>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <h3>Current Email: {user.email}</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Change your password</h3>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="new password"
            />
            <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirm new password"
            />
            <button>Confirm Change</button>
          </form>
        </>
      );
}

export default ChangeCredentialModal;