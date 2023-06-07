import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAnimeThunk } from '../../store/anime';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AnimeTile from './AnimeTile';
import FavoritesBar from '../Favorite';
import { getSingleUserThunk } from '../../store/user';
function HomePage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const animes = useSelector((state) => state.anime)
  const user = useSelector((state) => state.session.user)
  let animeIds = []
  if(user){
    animeIds = user.favorites
    animeIds = Object.values(animeIds)
  }
  // console.log('anime --->',animes)

  console.log('this one ------->',animeIds)

  useEffect(() => {
    dispatch(getAllAnimeThunk())
    if(user){
      dispatch(getSingleUserThunk(user.id))
    }
  }, [dispatch])
  console.log(user)
  console.log(animeIds)
  console.log(animeIds.length)
  const animesArr = Object.values(animes)
    return (
      <div>
        {
          // user && animeIds && animeIds.length && (<FavoritesBar animes={animes} user={user} animeIds={animeIds}/>)
          (user && animeIds && animeIds.length) ? <FavoritesBar animes={animes} user={user} animeIds={animeIds}/> : null
        }
        <div className = 'allAnimeContainer'>
        {
          
          animesArr.map(anime => (
            <AnimeTile anime={anime} />
          ))
         
        }
        </div>
      </div>
    )
}

export default HomePage;