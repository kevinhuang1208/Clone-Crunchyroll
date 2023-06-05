import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";
import DeleteAnimeModal from "../DeleteAnime";
import { getAllAnimeThunk } from "../../store/anime";
import OpenModalButton from "../OpenModalButton";

function ProfilePage() {
    const user = useSelector((state) => state.session.user);

    return (
        <>
            <h2>Hello, {user.username}</h2>

        </>
    )
}

export default ProfilePage
