import { useHistory } from "react-router-dom";
import './index.css'


function AnimeTile({anime}){
    const history = useHistory();

    const handleClick = () =>{
        history.push(`/anime/${anime.id}`)
      }

    //   console.log('single anime ->>>>>>>>------wakanda4life',anime)
      if(!anime) return null

    //   <img className = 'animeTileCoverPicture' onClick = {handleClick}  src = {anime.coverPicture}/>

      else
    return(
        <div key ={anime.id} id = {anime.id} className = 'animeTileHomePage' onClick = {handleClick}>

            <div className = 'tileCoverPhotoHomePageDiv'>
                <img className = 'tileCoverPhotoHomePage' src = {anime.coverPicture}/>
            </div>
            <div className="hover-div">
            <div className = 'animeShowName'>
                <h2>{anime.showname}</h2>
            </div>
            <div className ='reviewTotalsTile'>
                <p>Total Reviews: {anime.reviewCount}</p>
                <p>Average Rating: {anime.avgRating}</p>
            </div>

            <div className = 'releaseDateTileDiv'>
                <p>Release Date: {anime.releaseDate}</p>
            </div>

            <div  className = 'animeDescription'>
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
