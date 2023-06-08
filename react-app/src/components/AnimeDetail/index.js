import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";
import DeleteAnimeModal from "../DeleteAnime";
import Review from '../Review'
import CreateReview from '../CreateReview'
import { getAllAnimeThunk } from "../../store/anime";
import OpenModalButton from "../OpenModalButton";
import { useHistory } from "react-router-dom";
import "./animeDetail.css"
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import { addUserFavorite, addUserSessionFavoriteThunk, removeUserFavorite } from "../../store/session";
import { deleteUserFavoriteThunk, getSingleUserThunk, postUserFavoriteThunk } from "../../store/user";

function AnimeDetail() {

  const dispatch = useDispatch();
  const { animeId } = useParams();
  const history = useHistory();
  // array of episodes and we have a link to each one infividually to a video player with the AWS url
  const animeObj = useSelector((state) => state.anime);
  const anime = Object.values(animeObj)
  console.log("anime", anime);
  // const [stateTest, setStateTest] = useState()
  
  const user = useSelector((state) => state.session.user);
  console.log('THIS IS THE USER ---->>>', user)
  let userFavorites = 'user.favorites'
  if (user) {
    userFavorites = user.favorites
  }
  const [isFavorite, setIsFavorite] = useState(userFavorites[animeId] || '')
 
  const episodesOfAnimeObj = useSelector((state) => state.episodes);
  const [episodesArr, setEpisodesArr] = useState([...Object.values(episodesOfAnimeObj)])
  const episodesOfAnime = Object.values(episodesOfAnimeObj)
  
  const singleAnime = anime[animeId - 1]
  // console.log('this is the anime ~~~~~~~>', singleAnime)
  ///singleAnime.authorId == user.id

  // console.log("this is the id of the url", animeId)
  // console.log('anime id ~~~~~~>',animeId)

  const reviewsObj = useSelector((state) => state.reviews)
  console.log('what is the reviewsObj---------', reviewsObj) // what is this?

  const reviewsArr = Object.values(reviewsObj)
  // console.log('Reviews array is this -------',reviewsArr)


  // console.log('USER ID ------>',user.id)
  // console.log('anime author id ------>', singleAnime.authorId)

  const handleClick = (e) => {
    e.preventDefault();
    if(isFavorite){
      dispatch(deleteUserFavoriteThunk(animeId))
      dispatch(removeUserFavorite(animeId))
      setIsFavorite(false)
      return alert("Removed from Favorites!")
    }else{
      dispatch(postUserFavoriteThunk(animeId))
      dispatch(addUserSessionFavoriteThunk(animeId))///this htunk is not adding anything to the db. It's only altering the store!
      dispatch(getSingleUserThunk(user.id))
      setIsFavorite(true)
      return alert("Added to Favorites!")
    }

    // dispatch(postUserFavoriteThunk(animeId))
    // dispatch(addUserSessionFavoriteThunk(animeId))///this htunk is not adding anything to the db. It's only altering the store!
    // dispatch(getSingleUserThunk(user.id))
    // return alert("Added to Favorites!")
  };
  const handleClickDeleteFavorite =  (e) => {
    e.preventDefault();
    dispatch(deleteUserFavoriteThunk(animeId))
    dispatch(removeUserFavorite(animeId))
    // return alert("Removed from Favorites!")
  };

  // render the createReview button helper function -------------
  const renderCreateReview = (reviewsArr, user) => {
    for (let review of reviewsArr) {
      // console.log('iterating the index? or the arr[0]',i)
      if (review.userId === user.id)
        return false
    }
    return true
  }
  // console.log(renderCreateReview(reviewsArr,user))-------------------
  // testing the createReviewhelper

  // ORIGINAL BUTTON LOGIC:
  // !userFavorites[animeId])
//   <div>
//   <button onClick={(e) => handleClick(e)}>Add Anime to Favorites</button>
//   </div> : <div><button onClick={(e) => handleClickDeleteFavorite(e)}>Remove Anime from Favorite</button></div>


  console.log('EPISODES OF ANIME ---------', episodesOfAnime)

  // useEffect(()=> {

  // }, [reviewsObj])

  useEffect(() => {
    dispatch(getAllAnimeThunk());
    // console.log('<<<<<<inside first use effect>>>>>>')
    dispatch(getAnimeReviewsThunk(animeId));
    dispatch(getAnimeEpisodesThunk(animeId));
    //there will? be a thunk to add the anime to the user's favorites
  }, [dispatch]);

  if (!singleAnime) return null

  else
    return (
      <div className="">

        <div className="TitleAnimeDetail">
          <h2 className = 'showNameHeader'>{singleAnime.showname}</h2>
        </div>

        <div className="AverageRatingAnimeDetail">
          Average Rating: {singleAnime.avgRating}
        </div>

        <div className="ReviewCountAnimeDetail">
          {singleAnime.reviewCount} Reviews
        </div>

        <div className='DescriptionAnimeDetail'>
          {singleAnime.desc}
        </div>
        {user &&
        (<div>
          <button onClick={(e) => handleClick(e)}>{isFavorite ? "Remove from Favorites!" : "Add to Favorites!"}</button>
        </div>)
        }
        {(user && user.id === singleAnime.authorId) && (
          <div className="anime-page-edit-button">
            <button onClick={() => history.push(`/anime/${animeId}/edit`)}>
              Edit your anime
            </button>
            {/* <button>
              <OpenModalMenuItem
              itemText="Delete Anime"
              modalComponent={<DeleteAnimeModal animeId={animeId}/>} 
              />
            </button> */}
          </div>
        )}

        <div className='listOfEpisodesDiv'>
          {episodesOfAnime.map((episode) => (
            <div className="singleEpisodeDiv" key={episode.id}>
              <h2>{singleAnime.showname} </h2>

              <div className='episodeWatchNow'>
                <h3>Episode: {episode.episodeNumber}, {episode.title}</h3>

                <NavLink exact to={`/anime/${singleAnime.id}/episodes/${episode.id}`}>
                  <img src={episode.episodeCoverImage} />
                </NavLink>

              </div>

              <p className = 'episodeDescription'>{episode.desc}</p>
            </div>
          ))}
        </div>


        {(!user) ? null : (singleAnime.authorId === user.id) ? (
          <button>
            <OpenModalMenuItem
              className="delete-button"
              itemText="Delete this Anime"
              modalComponent={<DeleteAnimeModal anime={singleAnime} key={singleAnime.id} />}
            />
          </button>
        )

          : (renderCreateReview(reviewsArr, user)) ? (
            <button className='CreateReviewModal'>
              <OpenModalMenuItem
                className='createReview'
                itemText='Create a Review!'
                modalComponent={<CreateReview anime={singleAnime} key={singleAnime.id} user={user} />}
              />
            </button>) : null
        }

        <h1>Reviews:</h1>
        <div className='reviewsMapDiv'>
          {reviewsArr.map((review) => (
            <Review review={review} user={user} key={review.id} />
          ))}
        </div>


      </div>
    )


}



export default AnimeDetail;
