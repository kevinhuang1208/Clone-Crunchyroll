import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";
import './index.css'
import PageNotFound from "../PageNotFound";

function EpisodeComponent() {

  const dispatch = useDispatch();
  const { episodeId } = useParams();
  const { animeId } = useParams();

  const episodesOfAnimeObj = useSelector((state) => state.episodes);
  const episodesOfAnime = Object.values(episodesOfAnimeObj)
  let currentEpisode = {};

  episodesOfAnime.forEach((ep) => {
    if (ep.id == episodeId)
      currentEpisode = ep
  })
  // console.log('-------------------',episodesOfAnimeObj)
  // console.log('this is the current episode------',currentEpisode)

  useEffect(() => {
    dispatch(getAnimeReviewsThunk(animeId));
    dispatch(getAnimeEpisodesThunk(animeId));
    //there will? be a thunk to add the anime to the user's favorites
  }, [dispatch]);
  if (!currentEpisode) {
    return (
      <PageNotFound />
    )
  }


  else
    return (
      <div className='episodeComponentDiv'>


        <div className='videoplayerandDescription'>
          <video width='700px' height='400px' controls controlsList="nodownload" poster="https://cdn.discordapp.com/attachments/1113213089702228038/1116837444759859220/Untitled.png">
            <source src={currentEpisode.videoLink} type='video/mp4'>
            </source>
          </video>
          <div className='headerandDescription'>
            <h2>{currentEpisode.title}</h2>
            <h3> {currentEpisode.releaseDate}</h3>
            <p className='descriptionDivEpisode'>
              {currentEpisode.desc}
            </p>
          </div>

        </div>
      </div>
    )

}

export default EpisodeComponent;
