import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";
import DeleteAnimeModal from "../DeleteAnime";
import { getAllAnimeThunk } from "../../store/anime";
import OpenModalButton from "../OpenModalButton";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import ChangePasswordModal from "../ChangePassword";
import ChangeEmailModal from "../ChangeEmail";
import { getSingleUserThunk } from "../../store/user"

function ProfilePage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const paramUser = useSelector((state) => state.user)
    console.log("this is state user to extract data for params", paramUser)

    const { userId } = useParams()

    console.log("this is userId params", userId)

    useEffect(() => {
      dispatch(getSingleUserThunk(userId));
      //there will? be a thunk to add the anime to the user's favorites
    }, [dispatch]);
    if (!user) return null

    return (
        <>
            <h2>Hello, {user.username}</h2>
            
            <OpenModalMenuItem
              className="delete-button"
              itemText="Change My Email"
              modalComponent={<ChangeEmailModal user={user} key={user.id}/>}
            />
            <OpenModalMenuItem
              className="delete-button"
              itemText="Change My Password"
              modalComponent={<ChangePasswordModal user={user} key={user.id}/>}
            />
        </>
    )
}

export default ProfilePage
