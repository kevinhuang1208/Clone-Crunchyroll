import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editAnimeThunk, postAnimeThunk } from "../../store/anime"
import { useHistory } from 'react-router-dom'
import "./animeForm.css"

const dateHelper = (dateParam) => {
    // "01/12/1997"
    const [month, date, year] = dateParam.split('/')
    const newFormat = [year, month, date].join('-')
    return newFormat
}


const AnimeForm = ({ anime, formType }) => {

    // console.log('PARAMS anime ~~~~~~~~>', anime)
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
    //Do we need to do the fe validations in an array??!?!?!?!?

    // if (formType === 'edit') {
    //     setShowname(anime.showname)
    //     setDescription(anime.desc)
    // }

    // const resetFile = (e) => {
    //     console.log("this isisi siis is hit")
    //     console.log("e.target -> ", e.target)
    //     // console.log("e.target -> ",e.tar)
    //     // e.target.files[0] = null
    //     e.target.value = undefined
    //     setCoverPicture(undefined)
    // }
    // Date object
    // const date = new Date();
    // const currDay= String(date.getDate()).padStart(2, '0');
    // const currMonth = String(date.getMonth()+1).padStart(2,"0");
    // const currYear = date.getFullYear();
    // const currDate = `${currDay}-${currMonth}-${currYear}`;
    const userId = useSelector(state => state.session.user)
    // console.log(userId)
    if (!userId) {
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
        // console.log("FORM IS VALIDATING...")
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
        // console.log("NEWFORMERRORS:     :", newFormErrors)
        if (Object.values(newFormErrors).length > 0) {
            setErrors(newFormErrors)
            // console.log('NEW FORM ERRORS INSIDE THE IF COND', newFormErrors)
            return newFormErrors
        }
        return false

    }
    // useEffect(() => {

    //     console.log(errors)
    // }, [showname, description, releaseDate, coverPicture])

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("coverpic : ", Object.keys(coverPicture))
        // formValidate()
        setErrors([])
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
            if (res.errors) {
                setErrors([...res.errors])
                // alert('Please fix the form errors before continuing')
                return
            }
            else {
                return history.push(`/anime/${anime.id}`)
            }
        }
        // const newAnime = {
        //     "showname": showname,
        //     "description": description,
        //     "release_date": releaseDate,
        //     "cover_picture": coverPicture
        // }
        // console.log('ERRORS OBJECT IN POST ANIME ---->>>>',errors)

        else {
            const res = await dispatch(postAnimeThunk(formData))
            if (res.errors) {
                setErrors([...res.errors])
                return
            }
            else {
                return history.push(`/anime/${res.id}`)
            }
        }

        // if (!Object.values(errors).length) {
        //     console.log('THIS WAS NOT HIT!!!!!!!!!')
        //     console.log("anime:", formData)
        //     const res = await dispatch(postAnimeThunk(formData))
        //     if (res.id) {
        //         history.push(`/anime/${res.id}`)
        //     }
        // }


    }
    // useEffect(() => {

    //     console.log(coverPicture)

    // }, [showname, description, releaseDate, coverPicture])
    return (
        <div className="createAnimeFormContainer">
            {
                (formType === 'edit') ? <h1 className='formHeader'>Edit an Anime </h1> :
                    <h1 className="formHeader">Create an Anime</h1>
            }


            {errors.length ?
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul> : null}
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

                </label>
                {formType === 'edit' &&
                    <div className='image-in-edit'>
                        <p>
                            Current cover image below. Please upload another file if you would like to overwrite this image.
                        </p>
                        <img className="animeFormImage" src={anime.coverPicture} />
                    </div>
                }
                <label className='cover-upload' >
                    Submit your Cover Image Here
                    <input
                        placeholder="insert a file here "
                        type="file"
                        accept='image/*'
                        filename={coverPicture && coverPicture.name}
                        onChange={(e) => setCoverPicture(e.target.files[0])}
                    />
                </label>
                <button disabled={!coverPicture || !showname || !releaseDate || !description}
                >Submit Anime
                </button>

            </form>


        </div>
    )
}

export default AnimeForm
