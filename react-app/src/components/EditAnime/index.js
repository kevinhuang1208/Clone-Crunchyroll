import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
// import { loadOneSpotThunk } from "../../store/spots"
// import CreateSpotFormIndex from "../CreateSpotForm"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllAnimeThunk } from "../../store/anime"
import AnimeForm from "../AnimeForm"
import "./editAnime.css"


const EditAnime = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { animeId } = useParams()
  const animeObj = useSelector(state => state.anime)
  const user = useSelector(state => state.session.user)
  useEffect(()=> {
    dispatch(getAllAnimeThunk())
  }, [dispatch])
  if (Object.values(animeObj).length === 0) {
    return(
      <h1> Loading... </h1>
      )
    }
  const anime = animeObj[animeId]
  console.log('user ---->',user)
  if (anime.authorId !== user.id) {
    history.push('/anime')
  }

  console.log('ANIME ~~~~~~~>',anime)

  return (
    <AnimeForm anime={anime} formType={'edit'}/>
  )

}

export default EditAnime