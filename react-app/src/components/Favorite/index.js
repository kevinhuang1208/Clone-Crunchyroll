import React, {useState, useEffect} from 'react'
import { NavLink, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import AnimeTile from '../HomePage/AnimeTile'
import { getSingleUserThunk } from '../../store/user'
function FavoritesBar({animes, animeIds,user}) {
    console.log('INSIDE FAVORITES BAR!!!')
    console.log('ANIMES INSIDE FAV BAR',animes)
    console.log('PARAMS FOR ANIME IDS INSIDE FAV BAR',animeIds)
    const dispatch = useDispatch()
    // const animeIds = useSelector((state) => state.user)
    console.log("klfdkl",animeIds)
    // const user = useSelector((state) => state.session.user);    
    // useEffect(()=> {
    //     console.log("is this usefeffechit")
    //     dispatch(getSingleUserThunk(user.id))
    // }, [dispatch])
    console.log(animeIds)
    // const animeIdsArr = Object.values(animeIds)
    if(!animeIds.length) return null
    return (
    <>
        <h1>Favorites!</h1>
        <div>
        {
            animeIds.map(animeId => (
                <>
                {/* <h1>{animeId}</h1> */}
                <AnimeTile anime={animes[animeId]}/>
                </>
            ))
        }
        </div>
    </>
    )
}

export default FavoritesBar 