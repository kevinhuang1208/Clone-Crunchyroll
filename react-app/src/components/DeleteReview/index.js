import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { useSelector } from "react-redux"
 
const DeleteReview = ({review}) =>{
    const {closeModal} = useModal();
    const dispatch = useDispatch();

    const yesDelete = async(e) =>{
        e.preventDefault
    }
    // delete review thunk u feel me
    // const deletedReview = await dispatch(deleteReview)


    return (
        <div className = 'deleteForm'>
        <form>
        <h3>Are you sure you want to delete this review? </h3>
    
        <div className = 'yesNobuttonDiv'>
          <button className = 'yesDeleteReview' onClick={yesDelete}> Yes(Delete Review)</button>
          <button className = 'noDonotDelete'> No(Keep Review) </button>
        </div>
        </form>
    
    
    
        </div>
    
    )
}

export default DeleteReview