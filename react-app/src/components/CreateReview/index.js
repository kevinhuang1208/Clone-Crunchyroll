import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import {postAnimeReviewThunk} from '../../store/reviews'

const CreateReview = ({anime,user}) =>{

    const dispatch = useDispatch()
    const {closeModal} = useModal();

    const [writeReview,setWriteReview] = useState('')
    const [stars, setStars] = useState(0)

    let starArr = [1,2,3,4,5]


    const handleClick =  async(e) =>{
        
        e.preventDefault();
        const formData = new FormData()
        formData.append('review',writeReview)
        formData.append('rating',stars)
        const res = await dispatch(postAnimeReviewThunk(formData,anime.id))
        
        return closeModal();
    }

    return(
    <div>
        <h1>Create a Review!</h1>

        <form onSubmit={handleClick}>
            <label>
                What are your thoughts?
                <textarea 
                    placeholder = 'Write a Review'
                    type = 'text'
                    value = {writeReview}
                    rows={8}
                    cols={40}
                    onChange = {e => setWriteReview(e.target.value)}
                />
            </label>

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
        
            <span>Stars</span>
            
            <div className= 'submitButtonReviewDiv'>
                <button className = "submitButtonReview " disabled={writeReview.length<100}>Submit your review</button>
            </div>

        </form>
    </div>
    )

}

export default CreateReview