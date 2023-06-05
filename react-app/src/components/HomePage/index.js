import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAnimeThunk } from '../../store/anime';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AnimeTile from './AnimeTile';

function HomePage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const animes = useSelector((state) => state.anime)
  // console.log('anime --->',animes)

  useEffect(() => {
    dispatch(getAllAnimeThunk())
  }, [dispatch])
  const animesArr = Object.values(animes)
    return (
      <div>
        
        {
          animesArr.map(anime => (
            <AnimeTile anime={anime} />
          ))
        }
      </div>
    )
}

export default HomePage;