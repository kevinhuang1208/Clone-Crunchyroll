import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";
import { getAllAnimeThunk } from "../../store/anime";
import OpenModalButton from "../OpenModalButton";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import ChangeCredentialModal from "../ChangeCredentials";
import { getSingleUserThunk } from "../../store/user"
import FavoritesBar from '../Favorite';
import DeleteUser from "../DeleteUser";
import "./ProfilePage.css";

function ProfilePage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    // console.log('this is user', user)

    const paramUser = useSelector((state) => state.user)
    // console.log("this is state user to extract data for params", paramUser)

    const animes = useSelector((state) => state.anime)

    const { userId } = useParams()

    // console.log("this is userId params", userId)

    let animeIds = []
    // console.log("animeIds got changed",animeIds)
    if(Object.values(paramUser).length){ ///
      animeIds = Object.values(paramUser.favorites) ///
      // console.log("animeIds got changed INSIDE IF",animeIds)
    }
    // console.log('anime ids for the profile page ---->',animeIds)

    useEffect(() => {
      dispatch(getSingleUserThunk(userId));
      // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
      dispatch(getAllAnimeThunk())
    }, [dispatch]);


    if (!user) return null
    if(!paramUser) return null


    return (
        <div className="overall-info">
            { user.id == userId ?
            <div className="ternary-info">
            <h2>Hello, {user.username}</h2>
            {user.studio ? <div className="studio-member">As a Studio Member, you can:
            <NavLink exact to={"/anime/new"} className='nav-to-make-anime'>
              ADD AN ANIME
              </NavLink>
            </div> : null}
            {/* <h3></h3>
            <OpenModalMenuItem
              className="delete-button"
              itemText="Change My Credentials"
              modalComponent={<ChangeCredentialModal user={user} key={user.id}/>}
            /> */}
            {/* <button>
            <OpenModalMenuItem
              className="delete-button"
              itemText="Delete My Account (PERMANENT)"
              modalComponent={<DeleteUser user={user} key={user.id}/>}
            />
            </button> */}
            </div>

            :
            <>
            <h2>This is {paramUser.username}'s Profile Page</h2>
            {user.studio ? <>Studio Member</> : null}
            </>
            }
            {
            (user && animeIds && animeIds.length) ? <FavoritesBar animes={animes} user={user} animeIds={animeIds}/> : null
            }
        </div>
    )
}

export default ProfilePage
