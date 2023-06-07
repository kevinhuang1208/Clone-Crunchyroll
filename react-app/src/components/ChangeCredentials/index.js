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

  //   const formValidate = () => {
  //     const newFormErrors = {}
  //     if (!showname || showname.length > 255) {
  //         newFormErrors.showname = "Your show MUST have a showname and it must be less than 255 characters long."
  //     }
  //     if (!description || description.length > 1000) {
  //         newFormErrors.description = "Your show MUST have a description and it must be less than 1000 characters long."
  //     }
  //     if (!releaseDate) {
  //         newFormErrors.releaseDate = "Your show MUST have a release date specified."
  //     }
  //     if (!coverPicture && formType !== 'edit') {
  //         newFormErrors.coverPicture = "Your show MUST have a cover picture."
  //     }
  //     if (Object.values(newFormErrors).length > 0) {
  //         setErrors(newFormErrors)
  //     }
  // }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCredentials = {
          username,
          email,
          password
        }
        // const formData = new FormData()
        // formData.append("username", username)
        // formData.append("email", email)
        // formData.append("password", password)

        // console.log("THIS IS FORM DATAAAAAAAAAAAAAAAAAAAAA", formData)
        console.log("THIS IS NEW CREDENTIALS", newCredentials)
        let res = await dispatch(editSingleUserThunk(newCredentials, user.id))
        console.log("THIS IS RES", res)
        if (res) {
          // await dispatch(editSingleUser(res))
          await closeModal()
          window.location.reload()
        }
        else {
          console.log("res not ok")
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
