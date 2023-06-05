import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postEpisodeThunk } from "../../store/animeDetail"
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom";

const EpisodeForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [episodeNum, setEpisodeNum] = useState('')
    const [description, setDescription] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [videoLink, setVideoLink] = useState(undefined)
    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState([])
    const {animeId} = useParams();

    const userId = useSelector(state => state.session)
    const allAnime = useSelector(state => state.anime)
    const anime = allAnime.animeId
    if (userId !== 1) {
        console.log('placfeholder')
    }






    const resetFile = (e) => {
        console.log("this isisi siis is hit")
        console.log("e.target -> ", e.target)
        // console.log("e.target -> ",e.tar)
        // e.target.files[0] = null
        e.target.value = undefined
        setVideoLink(undefined)
    }
    const formValidate = () => {
        const newFormErrors = {}
        if(!episodeNum){
            newFormErrors.episodeNum = "Your show MUST have a episode number."
        }
        if(!description || description.length > 1000){
            newFormErrors.description = "Your show MUST have a description and it must be less than 1000 characters long."
        }
        if(!releaseDate){
            newFormErrors.releaseDate = "Your show MUST have a release date specified."
        }
        if(!videoLink){
            newFormErrors.videoLink = "Your show MUST have a video link to the episode."
        }
        if(!title || title.length > 100) {
          newFormErrors.title= "Your show MUST have a title and it must be less than 100 characters"
        }
        if(Object.values(newFormErrors).length > 0){
            setErrors(newFormErrors)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("coverpic : ", Object.keys(videoLink))
        formValidate()
        const formData = new FormData()
        formData.append("episode_number", episodeNum)
        formData.append("description", description)
        formData.append("release_date", releaseDate)
        formData.append("video_link", videoLink)
        formData.append("title", title)

        console.log('EPISODE FORM DATA FROM REACT COMPONENT ->', formData)
        // const newAnime = {
        //     "episodeNum": episodeNum,
        //     "description": description,
        //     "release_date": releaseDate,
        //     "cover_picture": videoLink
        // }

        if (!Object.values(errors).length) {
            console.log("anime:", formData)
            const res = await dispatch(postEpisodeThunk(animeId, formData))
            if(res.id) {
                history.push(`/anime/${animeId}/episodes/${res.id}`)
            }
        }


    }
    useEffect(() => {

        console.log(videoLink)


    }, [episodeNum, description, releaseDate, videoLink])
    return (
        <div className="createAnimeFormContainer">
            <h1 className="formHeader">Create an Episode for your Anime</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Episode Title:
                    <input
                        placeholder="Title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <p className="formError">{errors.title}</p>
                </label>
                <label>
                    Description:
                    <input
                        placeholder="Add a detailed description of your show here!"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="formError">{errors.description}</p>
                </label>
                <label>
                    Release Date:
                    <input
                        placeholder=""
                        type="date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                    <p className="formError">{errors.videoLink}</p>
                </label>

                <label>
                    Episode Number:
                    <input
                        placeholder=""
                        type="number"
                        value={episodeNum}
                        onChange={(e) => setEpisodeNum(e.target.value)}
                    />
                    <p className="formError">{errors.episodeNum}</p>
                </label>
                <label>
                    Video File:
                    <input
                        placeholder="insert a file here "
                        type="file"
                        accept='video/*'
                        filename={videoLink && videoLink.name}
                        onChange={(e) => setVideoLink(e.target.files[0])}
                    />
                    <p className="formError">{errors}</p>
                    {videoLink && videoLink.name && (

                        <button onClick={(e) => resetFile(e)}>Remove File</button>
                    )}
                </label>
                <button>Submit Episode</button>

            </form>


        </div>
    )
}

export default EpisodeForm
