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

function AnimeDetail() {

  const dispatch = useDispatch();
  const {animeId} = useParams();
  const history = useHistory();
  // array of episodes and we have a link to each one infividually to a video player with the AWS url
  const animeObj = useSelector((state) => state.anime);
  const anime = Object.values(animeObj)
  console.log("anime", anime);
  const [stateTest, setStateTest] = useState()


  const user = useSelector((state) => state.session.user);
  // console.log("user~~~~~>", user);

  const episodesOfAnimeObj = useSelector((state) => state.episodes);
  const episodesOfAnime = Object.values(episodesOfAnimeObj)
  // console.log('Episodes for this specific anime --------', episodesOfAnime)

  // array starts at 0, but the first animeId is 1
  const singleAnime = anime[animeId - 1]
  // console.log('this is the anime ~~~~~~~>', singleAnime)
  ///singleAnime.authorId == user.id

  // console.log("this is the id of the url", animeId)
  // console.log('anime id ~~~~~~>',animeId)

  const reviewsObj = useSelector((state) => state.reviews)
  console.log('what is the reviewsObj---------',reviewsObj) // what is this?
  
  const reviewsArr = Object.values(reviewsObj)
  // console.log('Reviews array is this -------',reviewsArr)

  
  // console.log('USER ID ------>',user.id)
  // console.log('anime author id ------>', singleAnime.authorId)
 
  const handleClick = (e) => {
    e.preventDefault();
    return alert("Added to Favorites!")
  };

 // render the createReview button helper function -------------
  const renderCreateReview = (reviewsArr, user) =>{
    for (let review of reviewsArr){
      // console.log('iterating the index? or the arr[0]',i)
      if(review.userId === user.id)
      return false
    }
    return true
  }
  // console.log(renderCreateReview(reviewsArr,user))-------------------
  // testing the createReviewhelper

  console.log('EPISODES OF ANIME ---------',episodesOfAnime)

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
          <h2>{singleAnime.showname}</h2>
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

        <div>
          <button onClick={handleClick}>Add Anime to Favorites</button>
        </div>
        {(user && user.id === singleAnime.authorId) && (
          <div className="anime-page-edit-button">
            <button onClick={()=> history.push(`/anime/${animeId}/edit`)}>
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
                 <img src = {episode.episodeCoverImage}/>
                </NavLink>

              </div>

              <p>{episode.desc}</p>
            </div>
          ))}
        </div>

        
        {(!user) ? null : (singleAnime.authorId === user.id) ? (
          <OpenModalMenuItem
            className="delete-button"
            itemText="Delete this Anime"
            modalComponent={<DeleteAnimeModal anime={singleAnime} key={singleAnime.id} />}
          />
        )

          : (renderCreateReview(reviewsArr,user)) ? (
            <div className='CreateReviewModal'>
              <OpenModalMenuItem
                className='createReview'
                itemText='Create a Review!'
                modalComponent={<CreateReview anime = {singleAnime} key={singleAnime.id} user = {user}/>} 
              />
            </div>) : null
        }

        <h1>Review!!!!!!!!</h1> 
        <div className = 'reviewsMapDiv'>
          { reviewsArr.map((review) => (
            <Review review = {review} user = {user} key = {review.id}/>
        ))}
        </div>
       

      </div>
    )


}



export default AnimeDetail;
