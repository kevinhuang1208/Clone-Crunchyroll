import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { editAnimeReviewThunk, getAnimeReviewsThunk } from '../../store/reviews'
import { getAllAnimeThunk } from "../../store/anime";
import './index.css'

const EditReview = ({ review, user }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal()

    const [writeReview, setWriteReview] = useState(review.review)
    const [stars, setStars] = useState(review.rating || 0)
    const [actualRating, setActualRating] = useState(review.rating || 0)

    let starArr = [1, 2, 3, 4, 5]

    // console.log('edit review', review)
    useEffect(() => {
        // console.log('stars used for the hover ---->', stars)
        // console.log('stars used for rating ---->', actualRating)
        // console.log(`current index: ${index} -- current stars : ${stars} -- boolean current index > stars = ${index}`)

    }, [stars, actualRating])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('review', writeReview)
        formData.append('rating', actualRating)
        // console.log('-------------', review.animeId, review.id)
        const res = await dispatch(editAnimeReviewThunk(formData, review.animeId, review.id))
        await dispatch(getAnimeReviewsThunk(review.animeId))
        await dispatch(getAllAnimeThunk())
        return closeModal()
    }
    const ratingImages = ["https://cdn.discordapp.com/attachments/1113213089702228038/1116814945737248860/1973941-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116814890221436948/1973936-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116814919371862076/1973940-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116815065161678910/1973938-200.png", "https://cdn.discordapp.com/attachments/1113213089702228038/1116815119414988920/1973937-200.png"]
    return (
        <div>
            <h2>Edit your review!</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={writeReview}
                    type='text'
                    rows={8}
                    cols={40}
                    onChange={(e) => (setWriteReview(e.target.value))}
                />

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

                <button className="submitButtonReview " disabled={writeReview.length < 100}>Submit your review</button>
            </form>
        </div>
    )

}

export default EditReview;