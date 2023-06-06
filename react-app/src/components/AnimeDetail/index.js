import { useSelector, useDispatch } from "react-redux";
import { useParams,NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";
import DeleteAnimeModal from "../DeleteAnime";
import { getAllAnimeThunk } from "../../store/anime";
import OpenModalButton from "../OpenModalButton";
import { useHistory } from "react-router-dom";
import "./animeDetail.css"
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";

function AnimeDetail() {
  const dispatch = useDispatch();
  const { animeId } = useParams();
  const history = useHistory();
  // array of episodes and we have a link to each one infividually to a video player with the AWS url
  const animeObj = useSelector((state) => state.anime);
  const anime = Object.values(animeObj)
  console.log("anime", anime);


  const user = useSelector((state) => state.session.user);
  console.log("user", user);

  const episodesOfAnimeObj = useSelector((state)=>state.episodes);

  const episodesOfAnime = Object.values(episodesOfAnimeObj)

  console.log('Episodes for this specific anime --------',episodesOfAnime)

 // array starts at 0, but the first animeId is 1
  const singleAnime = anime[animeId-1]
  console.log('this is the anime',singleAnime)

  // console.log("this is the id of the url", animeId)

  const handleClick = (e) => {
    e.preventDefault();


    return alert("Added to Favorites!")
};

useEffect(() => {
    dispatch(getAllAnimeThunk());
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
        {singleAnime.avgRating}
      </div>

      <div className="ReviewCountAnimeDetail">
        {singleAnime.reviewCount} Reviews
      </div>

      <div className = 'DescriptionAnimeDetail'>
        {singleAnime.desc}
      </div>

      <div>
        <button onClick={handleClick}>Add Anime to Favorites</button>
      </div>

      <div className ='listOfEpisodesDiv'>
        {episodesOfAnime.map((episode) => (
          <div className="singleEpisodeDiv" key={episode.id}>
            <h2>{singleAnime.showname}</h2>

              <div className ='episodeWatchNow'>
                <p>Episode {episode.episodeNumber}</p>
                <NavLink exact to={`/anime/${singleAnime.id}/episodes/${episode.id}`}>
                Watch Now!
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
              modalComponent={<DeleteAnimeModal anime={singleAnime} key={singleAnime.id}/>}
            />
         )

         : null
       }
    </div>
  )


     }



export default AnimeDetail;
