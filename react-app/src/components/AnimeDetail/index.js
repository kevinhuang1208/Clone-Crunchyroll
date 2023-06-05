import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail"
import { getAnimeReviewsThunk } from "../../store/reviews";


function AnimeDetail() {

    const dispatch = useDispatch()
    const { animeId } = useParams()

    // array of episodes and we have a link to each one infividually to a video player with the AWS url


    const episodesOfAnime = '';

    useEffect(() => {
        dispatch(getAnimeEpisodesThunk(animeId))
        dispatch(getAnimeReviewsThunk(animeId))
    }, [dispatch])


    return (
        <div className=''>
            test cuz
        </div>
    )

}

export default AnimeDetail;
