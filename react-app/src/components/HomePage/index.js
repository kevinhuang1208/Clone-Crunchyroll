import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAnimeThunk } from '../../store/anime';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AnimeTile from './AnimeTile';
import FavoritesBar from '../Favorite';
import { getSingleUserThunk } from '../../store/user';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    dispatch(getAllAnimeThunk()).then(() => setLoaded(true));
    if (user) {
      dispatch(getSingleUserThunk(user.id))
    }
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
  console.log('random Anime Array-----', randomAnimes)
  if (!loaded) {
    return (
      <Loading />
    )
  }

  return (
    <div className='homePageDiv'>
      {
        // user && animeIds && animeIds.length && (<FavoritesBar animes={animes} user={user} animeIds={animeIds}/>)
        (user && animeIds && animeIds.length) ? <FavoritesBar animes={animes} user={user} animeIds={animeIds} /> : null
      }
      <div className = 'divofCarro'>
        <h1> Reccomended for you!</h1>  


  <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
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
          </Carousel>
          </div>


      <div className='allAnimeContainer'>
        {/* <span>
          <h2>Anime</h2>
          </span> */}

        {

          animesArr.map(anime => (
            <AnimeTile key={`anime-tile-${anime.id}`} anime={anime} />
          ))

        }
      </div>
    </div>
  )
}

export default HomePage;
