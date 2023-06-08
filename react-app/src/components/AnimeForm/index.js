import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editAnimeThunk, postAnimeThunk } from "../../store/anime"
import { useHistory } from 'react-router-dom'

const dateHelper = (dateParam) => {
    // "01/12/1997"
    const [month, date, year] = dateParam.split('/')
    const newFormat = [year, month, date].join('-')
    return newFormat
}


const AnimeForm = ({ anime, formType }) => {

    console.log('PARAMS anime ~~~~~~~~>', anime)
    // console.log('PARAMS formType ~~~~~~~~>', formType)

    let editDate = null
    if (formType === 'edit') {
        editDate = dateHelper(anime.releaseDate)
    }
    const history = useHistory()
    const dispatch = useDispatch()
    const [showname, setShowname] = useState(anime?.showname || '')
    const [description, setDescription] = useState(anime?.desc || '')
    const [releaseDate, setReleaseDate] = useState(editDate || '')
    const [coverPicture, setCoverPicture] = useState(undefined)
    const [errors, setErrors] = useState([])

    // if (formType === 'edit') {
    //     setShowname(anime.showname)
    //     setDescription(anime.desc)
    // }

    const resetFile = (e) => {
        console.log("this isisi siis is hit")
        console.log("e.target -> ", e.target)
        // console.log("e.target -> ",e.tar)
        // e.target.files[0] = null
        e.target.value = undefined
        setCoverPicture(undefined)
    }
    const userId = useSelector(state => state.session.user)
    // console.log(userId)
    if(!userId) {
        history.push('/anime')
    }
    if (userId) {
        if (!userId.studio) {

            history.push('/anime')
        }
    } else if (!userId) {
        history.push('/anime')
    }

    const formValidate = () => {
        const newFormErrors = {}
        if (!showname || showname.length > 255) {
            newFormErrors.showname = "Your show MUST have a showname and it must be less than 255 characters long."
        }
        if (!description || description.length > 1000) {
            newFormErrors.description = "Your show MUST have a description and it must be less than 1000 characters long."
        }
        if (!releaseDate) {
            newFormErrors.releaseDate = "Your show MUST have a release date specified."
        }
        if (!coverPicture && formType !== 'edit') {
            newFormErrors.coverPicture = "Your show MUST have a cover picture."
        }
        if (Object.values(newFormErrors).length > 0) {
            setErrors(newFormErrors)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("coverpic : ", Object.keys(coverPicture))
        formValidate()
        const formData = new FormData()
        formData.append("showname", showname)
        formData.append("description", description)
        formData.append("release_date", releaseDate)
        if (coverPicture) {
            formData.append("cover_picture", coverPicture)
        }
        console.log('FORM DATA FROM REACT COMPONENT ->', formData)

        if (formType === 'edit') {
            const res = await dispatch(editAnimeThunk(anime.id, formData))
            if (res.id) {
                return history.push(`/anime/${anime.id}`)
            }
        }
        // const newAnime = {
        //     "showname": showname,
        //     "description": description,
        //     "release_date": releaseDate,
        //     "cover_picture": coverPicture
        // }

        if (!Object.values(errors).length) {
            console.log("anime:", formData)
            const res = await dispatch(postAnimeThunk(formData))
            if (res.id) {
                history.push(`/anime/${res.id}`)
            }
        }


    }
    // useEffect(() => {

    //     console.log(coverPicture)

    // }, [showname, description, releaseDate, coverPicture])
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
                {formType === 'edit' &&
                    <div>
                        <p>
                            Current cover image below. Please upload another file if you would like to overwrite this image.
                        </p>
                        <img className="animeFormImage" src={anime.coverPicture} />
                    </div>
                }
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
                </label>
                <button>Submit Anime</button>

            </form>


        </div>
    )
}

export default AnimeForm
