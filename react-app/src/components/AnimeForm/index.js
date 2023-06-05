import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {postAnimeThunk} from "../../store/anime"
import {useHistory} from 'react-router-dom'

const AnimeForm = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault()

    }

    return (
        <div className="createAnimeFormContainer">
            <h1 className="formHeader">Create an Anime</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    --placeholder
                    <input
                    placeholder=""
                    type="text"
                    value={}
                    onChange={(e) => (e.target.value)}
                    />
                </label>
            </form>


        </div>
    )
}

export default AnimeForm
