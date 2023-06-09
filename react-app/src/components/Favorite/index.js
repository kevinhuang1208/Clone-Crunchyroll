import React, {useState, useEffect} from 'react'
import { NavLink, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import AnimeTile from '../HomePage/AnimeTile'
import { getSingleUserThunk } from '../../store/user'
import './index.css'
function FavoritesBar({animes, animeIds,user}) {
    // console.log('INSIDE FAVORITES BAR!!!')
    // console.log('ANIMES INSIDE FAV BAR',animes)
    // console.log('PARAMS FOR ANIME IDS INSIDE FAV BAR',animeIds)
    const dispatch = useDispatch()
    // const animeIds = useSelector((state) => state.user)
    // console.log("klfdkl",animeIds)
    // const user = useSelector((state) => state.session.user);
    // useEffect(()=> {
    //     console.log("is this usefeffechit")
    //     dispatch(getSingleUserThunk(user.id))
    // }, [dispatch])
    // console.log(animeIds)
    // const animeIdsArr = Object.values(animeIds)
    if(!animeIds.length) return null
    return (
    <div className = 'favoritesDiv'>
        <h1>Favorites!</h1>
        <div className = 'favoritesMapDiv'>
        {
            animeIds.map(animeId => (
                <AnimeTile key = {`anime-favorite-${animeId}`} anime={animes[animeId]}/>

            ))
        }
        </div>
    </div>
    )
}

export default FavoritesBar
