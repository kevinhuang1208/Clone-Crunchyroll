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
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import { addUserFavorite, addUserSessionFavoriteThunk, removeUserFavorite } from "../../store/session";
import { deleteUserFavoriteThunk, getSingleUserThunk, postUserFavoriteThunk } from "../../store/user";
import { deleteEpisodeThunk } from "../../store/animeDetail";
import DeleteEpisodeModal from "../DeleteEpisode";
import "./animeDetail.css";

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
  // console.log('THIS IS THE USER ---->>>', user)
  let userFavorites = 'user.favorites'
  if (user) {
    userFavorites = user.favorites
  }
  const [isFavorite, setIsFavorite] = useState(userFavorites[animeId] || '')

  const episodesOfAnimeObj = useSelector((state) => state.episodes);
  const [episodesArr, setEpisodesArr] = useState([...Object.values(episodesOfAnimeObj)])
  const episodesOfAnime = Object.values(episodesOfAnimeObj)

  const singleAnime = animeObj[animeId]
  console.log('find this thang -  -- - - - - - - - - - -- - -- -',singleAnime)

  const reviewsObj = useSelector((state) => state.reviews)
  const reviewsArr = Object.values(reviewsObj)

  const handleClick = (e) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(deleteUserFavoriteThunk(animeId))
      dispatch(removeUserFavorite(animeId))
      setIsFavorite(false)
      return alert("Removed from Favorites!")
    } else {
      dispatch(postUserFavoriteThunk(animeId))
      dispatch(addUserSessionFavoriteThunk(animeId))///this htunk is not adding anything to the db. It's only altering the store!
      dispatch(getSingleUserThunk(user.id))
      setIsFavorite(true)
      return alert("Added to Favorites!")
    }
  };
  const handleClickDeleteEpisode = (e) => {
    e.preventDefault();
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

  console.log('EPISODES OF ANIME ---------', episodesOfAnime)


  useEffect(() => {
    dispatch(getAllAnimeThunk());
    dispatch(getAnimeReviewsThunk(animeId));
    dispatch(getAnimeEpisodesThunk(animeId));
    setEpisodesArr([...Object.values(episodesOfAnimeObj)])

  }, [dispatch, Object.values(episodesOfAnimeObj).length]);

  if (!singleAnime) return null

  return (
    <div className="wholeContainer">
      <div className="desc-and-photo-split">
        <div className="desc-container">
            <div className="TitleAnimeDetail">
              <h2 className='showNameHeader'>{singleAnime.showname}</h2>
            </div>
            <div className="review-div">
              <div className="AverageRatingAnimeDetail">
              Average Rating: {singleAnime.avgRating}
              </div>
              <> | </>
              <div className="ReviewCountAnimeDetail">
                 {singleAnime.reviewCount} Review(s)
              </div>
            </div>
      <div className="the-buttons-in-desc">
      {user &&
        (<div className="remove-favorite-tern">
          <button className="remove-fav" onClick={(e) => handleClick(e)}>{isFavorite ? "Remove from Favorites!" : "Add to Favorites!"}</button>
        </div>)
      }
      {(user && user.id === singleAnime.authorId) && (
        <>
          <div className="anime-page-edit-button">
            <button onClick={() => history.push(`/anime/${animeId}/edit`)}>
              Edit your anime
            </button>
          </div>
          <div className="anime-page-episode-post-button">
            <button onClick={() => history.push(`/anime/${animeId}/episodes/new`)}>
              Add an Episode
            </button>
          </div>
        </>
      )}
      </div>
          <div className='DescriptionAnimeDetail'>
            {singleAnime.desc}
          </div>
          </div>
        <div className="desc-photo">
          <img src={singleAnime.coverPicture}/>
        </div>
      </div>


      <div className='listOfEpisodesDiv'>
        {episodesOfAnime.map((episode) => (

          <div className="singleEpisodeDiv" key={episode.id}>
            <h2>{singleAnime.showname} </h2>
            <div className='episodeWatchNow'>
              <h3>Episode: {episode.episodeNumber}, {episode.title}</h3>

              <NavLink exact to={`/anime/${singleAnime.id}/episodes/${episode.id}`}>
                <img src={episode.episodeCoverImage} />
              </NavLink>
            {user && user.id == animeObj[animeId].authorId && (
              <div className='delete-episode-button'>
              <OpenModalMenuItem
                className="delete-button"
                itemText="Delete this episode"
                modalComponent={<DeleteEpisodeModal episode={episode} key={`${episode.id}-episode`} />}
              />
              </div>
            )
            }
            </div>
            <p className='episodeDescription'>{episode.desc}</p>
          </div>

        ))}
      </div>
      {(!user) ? null : (singleAnime.authorId === user.id) ? (
        <button className='delete-anime-button'>
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

      <h1 className = 'reviewsHeaderDetail'>Reviews:</h1>
      <div className='reviewsMapDiv'>
        {reviewsArr.map((review) => (
          <Review review={review} user={user} key={review.id} />
        ))}
      </div>


    </div>
  )


}



export default AnimeDetail;
