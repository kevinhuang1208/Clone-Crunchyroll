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
  const animeIds = useSelector((state) => state.user.favorites)
  // console.log('anime --->',animes)

  console.log('this one ------->',animeIds)

  useEffect(() => {
    dispatch(getAllAnimeThunk())
    dispatch(getSingleUserThunk(user.id))
  }, [dispatch])
  const animesArr = Object.values(animes)
    return (
      <div>
        {
          user && animeIds && animeIds.length && (<FavoritesBar animes={animes} user={user} animeIds={animeIds}/>)
        }
        {
          animesArr.map(anime => (
            <AnimeTile anime={anime} />
          ))
        }
      </div>
    )
}

export default HomePage;