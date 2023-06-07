import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import {editAnimeReviewThunk} from '../../store/reviews'

const EditReview = ({review,user}) =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const {closeModal} = useModal()

    const [writeReview, setWriteReview] = useState(review?.review)
    // const [stars, setStars] = useState(review.)
    console.log('edit review' , review)


    const handleSubmit = async (e)=> {
        e.preventDefault()
        const formData = new FormData()

        formData.append('review', writeReview)
        // formData.append('rating',stars)
        
        const res = await dispatch(editAnimeReviewThunk(formData,review.anime_id))
        
        return closeModal()
    }

    return(
        <div> 
        does this open a modal cuhz || render form here
        Edit! 
        <form>  
        <textarea
        value = {writeReview}
        type = 'text'
        rows={8}
        cols={40}
        onChange = {(e)=>(setWriteReview(e.target.value))}
        />
        
        <button className = "submitButtonReview " disabled={writeReview.length<100}>Submit your review</button>
        </form>
        </div>
    )

}

export default EditReview;