const GET_SINGLE_ANIME = "anime/getSingleAnime"
const GET_ANIME_REVIEWS = ""

const getSingleAnimeEpisodes = (episodes) => {
    return {
        type: GET_SINGLE_ANIME,
        payload: episodes
    }
}

export const getAnimeEpisodesThunk = (animeId) => async (dispatch) => {
    const response = await fetch(`/api/anime/${animeId}/episodes`)
    const data = await response.json()
    if(response.ok){
        const normalEpisodes = {}
        data.episodes.forEach((episode) => {
            normalEpisodes[episode.id] = episode
        })
        dispatch(getSingleAnimeEpisodes(normalEpisodes))
        console.log("normalEpisodes: ", normalEpisodes)
        return normalEpisodes
    }
    console.log("episodes response NOT ok")
    console.log("response: ",response)
    console.log("---------------")
    console.log("data: ",data)
    return null
}

const initialState = {}

const animeEpisodesReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SINGLE_ANIME:{
            let newState = {}
            newState = {...action.payload}
            return newState
        }
        default:
            return state
    }
}

export default animeEpisodesReducer
