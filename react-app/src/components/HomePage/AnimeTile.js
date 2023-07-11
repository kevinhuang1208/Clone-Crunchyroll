import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import './index.css'


function AnimeTile({ anime }) {
    const history = useHistory();
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = () => {
        history.push(`/anime/${anime.id}`)
    }
    const handleMouseEnter = () => {
        setIsHovered(true);
      };

    const handleMouseLeave = () => {
        setIsHovered(false);
      };

    //   console.log('single anime ->>>>>>>>------wakanda4life',anime)
    if (!anime) return null

    //   <img className = 'animeTileCoverPicture' onClick = {handleClick}  src = {anime.coverPicture}/>

    else
        return (
            <div
                key={anime.id}
                id={anime.id}
                className='animeTileHomePage'
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
             >
                <div className='tileCoverPhotoHomePageDiv'>
                    <img
                    className='tileCoverPhotoHomePage'
                    src={anime.coverPicture}
                    style={{
                        width: '250px',
                        height: isHovered ? '353px' : '300px',
                      }}

                     />
                </div>
                {!isHovered &&
                <div>
                    <div className="anime-tile-name">
                        {anime.showname}
                    </div>
                    <div className="show-lang">
                        Sub | Dub
                    </div>
                </div>
                }
                <div
                className="hover-div"
                // style={{
                //         backgroundImage: `url(${anime.coverPicture})`, backgroundSize: 'cover',
                //         backgroundPosition: 'center',
                //         backgroundRepeat: 'no-repeat',
                //         }}
                        >
                    <div className='animeShowName'>
                        <h2>{anime.showname}</h2>
                    </div>
                    <div className='reviewTotalsTile'>
                        <p>Total Reviews: {anime.reviewCount}</p>
                        <p>Average Rating: {anime.avgRating}</p>
                    </div>

                    <div className='releaseDateTileDiv'>
                        <p>Release Date: {anime.releaseDate}</p>
                    </div>

                    <div className='animeDescription'>
                        <p>{anime.desc}</p>
                    </div>
                </div>

                {/* <div className = 'animeShowName'>
                <h2>{anime.showname}</h2>
            </div> */}
            </div>
        )
}

export default AnimeTile
