import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { postAnimeReviewThunk, getAnimeReviewsThunk } from '../../store/reviews'
import { getAllAnimeThunk } from "../../store/anime";
import './index.css'

const CreateReview = ({ anime, user }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal()

    const [writeReview, setWriteReview] = useState('')
    const [stars, setStars] = useState(0)
    const [actualRating, setActualRating] = useState(0)

    let starArr = [1, 2, 3, 4, 5]


    const handleClick = async (e) => {

        e.preventDefault();
        const formData = new FormData()
        formData.append('review', writeReview)
        formData.append('rating', stars)
        const res = await dispatch(postAnimeReviewThunk(formData, anime.id))
        await dispatch(getAnimeReviewsThunk(anime.id))
        await dispatch(getAllAnimeThunk())
        return closeModal();
    }
    const ratingImages = ["https://cdn.discordapp.com/attachments/1113213089702228038/1116814945737248860/1973941-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116814890221436948/1973936-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116814919371862076/1973940-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116815065161678910/1973938-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116815119414988920/1973937-200.png"]


    return (
        <div>
            <h1 className='createReviewHeader'>Create a Review!</h1>

            <form onSubmit={handleClick}>
                <label>
                    What are your thoughts? (min. 100 characters)
                    <textarea
                        placeholder='Write a Review (100 characters)'
                        type='text'
                        value={writeReview}
                        rows={8}
                        cols={40}
                        onChange={e => setWriteReview(e.target.value)}
                    />
                </label>

                <div className="ratingDiv" onMouseLeave={() => setStars(actualRating)}>
                    {starArr.map((index) => {
                        // console.log(index)
                        return (
                            <div
                                // className={index <= stars ? "filled" : "empty"}
                                onMouseEnter={() => setStars(index)}
                                onClick={() => setActualRating(stars)}

                                key={`${index}-star`}
                            >
                                <img className={`dragonballs ${index <= stars ? "filled" : "empty"}`} src={ratingImages[index - 1]} ></img>
                            </div>)
                    })}
                </div>

                <span>Stars</span>

                <div className='submitButtonReviewDiv'>
                    <button className="submitButtonReview " disabled={writeReview.length < 100 || actualRating < 1}>Submit your review</button>
                </div>

            </form>
        </div>
    )

}

export default CreateReview

{/* <div className="ratingDiv">
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
            </div> */}
