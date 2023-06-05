import { useHistory } from "react-router-dom";



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
        <div id = {anime.id} className = 'animeTileHomePage'>

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
    )
}

export default AnimeTile