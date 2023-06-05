import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAnimeEpisodesThunk } from "../../store/animeDetail";
import { getAnimeReviewsThunk } from "../../store/reviews";
import DeleteAnimeModal from "../DeleteAnime";
import { getAllAnimeThunk } from "../../store/anime";
import OpenModalButton from "../OpenModalButton";

function AnimeDetail() {
  const dispatch = useDispatch();
  const { animeId } = useParams();

  // array of episodes and we have a link to each one infividually to a video player with the AWS url
  const animeObj = useSelector((state) => state.anime);
  const anime = Object.values(animeObj)
  console.log("anime", anime);

  const user = useSelector((state) => state.session.user);
  console.log("user", user);

const episodesOfAnime = "";

useEffect(() => {
    dispatch(getAllAnimeThunk());
    dispatch(getAnimeReviewsThunk(animeId));
    dispatch(getAnimeEpisodesThunk(animeId));
  }, [dispatch]);

  return <div className="">
    test cuz
    {anime.map((eachAnime) =>
         (eachAnime.id === animeId) && (user.id === eachAnime.authorId) ?
            <div className="delete-anime">
                <button><OpenModalButton
                className='delete-button'
                itemText="Delete"
                modalComponent={<DeleteAnimeModal
                anime={eachAnime}
                key={eachAnime.id}
                />}
            /></button>
            </div> : null


    )}
    </div>;
}

export default AnimeDetail;
