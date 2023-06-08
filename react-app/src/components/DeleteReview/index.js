import { useDispatch } from "react-redux"
import { useModal } from "../../context/Modal"
import { useSelector } from "react-redux"
import {deleteAnimeReviewThunk} from '../../store/reviews'
import './index.css'
const DeleteReview = ({review}) =>{
    const {closeModal} = useModal();
    const dispatch = useDispatch();
    console.log('inside of delete review ' , review.id , review.animeId)

    const yesDelete = async(e) =>{
        e.preventDefault()
        // console.log(review.animeId, review.id)
        await dispatch(deleteAnimeReviewThunk(review.id))
        closeModal()
    }
    // delete review thunk u feel me
    // const deletedReview = await dispatch(deleteReview)


    return (
        <div className = 'deleteForm'>

        <h3>Are you sure you want to delete this review? </h3>

        <form on>
        <div className = 'yesNobuttonDiv'>
          <button className = 'yesDeleteReview' onClick={yesDelete}> Yes</button>
          <button className = 'yesDeleteReview'> No</button>
        </div>
        </form>
    
    
        </div>
    
    )
}

export default DeleteReview;