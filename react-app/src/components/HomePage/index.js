import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAnimeThunk } from '../../store/anime';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AnimeTile from './AnimeTile';
import FavoritesBar from '../Favorite';
import { getSingleUserThunk } from '../../store/user';

import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Loading from '../Loading';

function HomePage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const animes = useSelector((state) => state.anime)
  const user = useSelector((state) => state.session.user)
  const [loaded, setLoaded] = useState(false)

  let animeIds = []
  if (user) {
    animeIds = user.favorites
    animeIds = Object.values(animeIds)
  }

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }

  

  useEffect(() => {

    setTimeout(async () => {
      dispatch(getAllAnimeThunk()).then(() => setLoaded(true));
      if (user) {
        dispatch(getSingleUserThunk(user.id))
      }
    }, 1500);

  }, [dispatch])
  // console.log(user)
  // console.log(animeIds)
  // console.log(animeIds.length)
  const animesArr = Object.values(animes)

  function selectRandomItems(array) {
    const copyArray = array.slice(); // Create a copy of the original array
    const randomItems = [];

    while (randomItems.length < 4 && copyArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * copyArray.length);
      const selectedItem = copyArray.splice(randomIndex, 1)[0];
      randomItems.push(selectedItem);
    }

    return randomItems;
  }
  const randomAnimes = selectRandomItems(animesArr)
  // console.log('random Anime Array-----', randomAnimes)
  if (!loaded) {
    return (
      <Loading />
    )
  }

  return (
    <div className='homePageDiv'>
      <div className='bigCarroDiv'>
        <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} interval={1700} >
          <img className='bigBanners' src='https://cdn.discordapp.com/attachments/1113213089702228038/1126642313364508734/image.png' />
          <img className='bigBanners' src='https://cdn.discordapp.com/attachments/1113213089702228038/1126650347478335608/52b8dd8a-eff2-4ed2-9b8d-7c0039df1c53.png' />
          <img className='bigBanners' src='https://cdn.discordapp.com/attachments/1113213089702228038/1126643229299834991/Rick-and-Morty-S6.png' />
          <img className='bigBanners' src='https://cdn.discordapp.com/attachments/1113213089702228038/1126650650432909512/70153391.png' />
          <img className='bigBanners' src='https://cdn.discordapp.com/attachments/1113213089702228038/1126643524415266940/1123312.png' />
        </Carousel>
        </div>

      {
        (user && animeIds && animeIds.length) ? <FavoritesBar animes={animes} user={user} animeIds={animeIds} /> : null
      }
      <div className='divofCarro'>
        <h1> Recommended for you!</h1>


        <Carousel1
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={true}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {randomAnimes.map((anime) => (
            <AnimeTile key={`anime-tile-${anime.id}`} anime={anime} />
          ))}
        </Carousel1>
      </div>

      <div className='anime-container-wrapper'>

        <div className='allAnimeContainer'>
          {

            animesArr.map(anime => (
              <AnimeTile key={`anime-tile-${anime.id}`} anime={anime} />
            ))

          }
        </div>
      </div>


    </div>
  )
}

export default HomePage;
