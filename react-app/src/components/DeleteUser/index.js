import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux"
import { deleteSingleUserThunk } from "../../store/user"

const DeleteUser = ({user}) =>{
    const {closeModal} = useModal();
    const dispatch = useDispatch();
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();

        return (
        dispatch(deleteSingleUserThunk(user.id))
            .then(closeModal())
            .then(history.push(`/`))
            .then(window.location.reload())
        )
    };



    return (
        <div className = 'deleteForm'>
        <h3>Are you sure you want to delete your account? </h3>

        <div className = 'yesNobuttonDiv'>
          <button className = 'yesDeleteReview' onClick={handleClick}> Yes(Delete This Account)</button>
          <button className = 'noDonotDelete' onClick={closeModal}> No(Keep This Account) </button>
        </div>



        </div>

    )
}

export default DeleteUser
