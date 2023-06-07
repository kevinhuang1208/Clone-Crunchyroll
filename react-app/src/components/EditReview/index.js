import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import {editAnimeReviewThunk,getAnimeReviewsThunk} from '../../store/reviews'

const EditReview = ({review,user}) =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const {closeModal} = useModal()

    const [writeReview, setWriteReview] = useState(review.review)
    const [stars, setStars] = useState(review.rating)

    let starArr = [1,2,3,4,5]

    console.log('edit review' , review)


    const handleSubmit = async (e)=> {
        e.preventDefault()

        const formData = new FormData()
        formData.append('review', writeReview)
        formData.append('rating',stars)
        console.log('-------------',review.animeId, review.id)
        const res = await dispatch(editAnimeReviewThunk(formData,review.animeId,review.id))
        await dispatch(getAnimeReviewsThunk(review.animeId))
        return closeModal()
    }

    return(
        <div> 
        Edit! 
        <form onSubmit={handleSubmit}>  
        <textarea
        value = {writeReview}
        type = 'text'
        rows={8}
        cols={40}
        onChange = {(e)=>(setWriteReview(e.target.value))}
        />

        <div className="ratingDiv">
            { starArr.map((index)=>{
                return(
                <div
                className={index > stars ? "filled" : "empty"}
                    onMouseEnter={() => setStars(index)}
                    onClick={() => setStars(stars)}
                >
                    <img className="sushis" src='https://cdn.discordapp.com/attachments/1113213089702228038/1115026569237368953/image-removebg-preview.png' ></img>
                </div>)
            })}
            </div>

        <button className = "submitButtonReview " disabled={writeReview.length<100}>Submit your review</button>
        </form>
        </div>
    )

}

export default EditReview;