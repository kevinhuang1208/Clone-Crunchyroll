import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";

function EpisodeComponent(){

    const dispatch = useDispatch();
    const {episodeId} = useParams();
    const {animeId} = useParams();

    const episodesOfAnimeObj = useSelector((state)=>state.episodes);
    const episodesOfAnime = Object.values(episodesOfAnimeObj)
    let currentEpisode = {};

    episodesOfAnime.forEach((ep) => {
        if(ep.id == episodeId)
        currentEpisode = ep
    })
    console.log('-------------------',episodesOfAnimeObj)
    console.log('this is the current episode------',currentEpisode)

    useEffect(() => {
        dispatch(getAnimeReviewsThunk(animeId));
        dispatch(getAnimeEpisodesThunk(animeId));
        //there will? be a thunk to add the anime to the user's favorites
      }, [dispatch]);

      return(
        <div>
                DID YOU MAKE IT HERE BROOODIEEE
                <div>
                <video width='700px' height = '400px' controls>
                    <source src = 'https://crunchyclone.s3.us-east-2.amazonaws.com/%5Bpseudo%5D+Rick+and+Morty+S01E01+Pilot+%5BBDRip%5D+%5B1080p%5D+%5Bh.265%5D.mp4' type= 'video/mp4'>
                    </source>
                </video>
                </div>
        </div>
      )

}

export default EpisodeComponent;
