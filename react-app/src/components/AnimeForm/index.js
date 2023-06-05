import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAnimeThunk } from "../../store/anime"
import { useHistory } from 'react-router-dom'

const AnimeForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [showname, setShowname] = useState('')
    const [description, setDescription] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [coverPicture, setCoverPicture] = useState(undefined)
    const [errors, setErrors] = useState([])

    const resetFile = (e) => {
        console.log("this isisi siis is hit")
        console.log("e.target -> ", e.target)
        // console.log("e.target -> ",e.tar)
        // e.target.files[0] = null
        e.target.value = undefined
        setCoverPicture(undefined)
    }
    const formValidate = () => {
        const newFormErrors = {}
        if(!showname || showname.length > 255){
            newFormErrors.showname = "Your show MUST have a showname and it must be less than 255 characters long."
        }
        if(!description || description.length > 1000){
            newFormErrors.description = "Your show MUST have a description and it must be less than 1000 characters long."
        }
        if(!releaseDate){
            newFormErrors.releaseDate = "Your show MUST have a release date specified."
        }
        if(!coverPicture){
            newFormErrors
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        const newAnime = {
            "showname": showname,
            "description": description,
            "release_date": releaseDate,
            "cover_picture": coverPicture
        }
        
        if (!Object.values(errors).length) {
            
            const res = await dispatch(postAnimeThunk(newAnime))
            if(res.id) {
                history.push(`/anime/${res.id}`)
            }
        }
        

    }
    useEffect(() => {

        console.log(coverPicture)

    }, [showname, description, releaseDate, coverPicture])
    return (
        <div className="createAnimeFormContainer">
            <h1 className="formHeader">Create an Anime</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Show Name:
                    <input
                        placeholder=""
                        type="text"
                        value={showname}
                        onChange={(e) => setShowname(e.target.value)}
                    />
                    <p className="formError">{errors.showname}</p>
                </label>
                <label>
                    Description
                    <input
                        placeholder="Add a detailed description of your show here!"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="formError">{errors.description}</p>
                </label>
                <label>
                    Release Date
                    <input
                        placeholder=""
                        type="date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                    <p className="formError">{errors}</p>
                </label>
                <label>
                    Cover Image
                    <input
                        placeholder="insert a file here "
                        type="file"
                        accept='image/*'
                        filename={coverPicture && coverPicture.name}
                        onChange={(e) => setCoverPicture(e.target.files[0])}
                    />
                    <p className="formError">{errors}</p>
                    {coverPicture && coverPicture.name && (

                        <button onClick={(e) => resetFile(e)}>Remove File</button>
                    )}
                </label>
                <button>Submit Anime</button>

            </form>


        </div>
    )
}

export default AnimeForm
