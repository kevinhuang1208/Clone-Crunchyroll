const GET_ANIME_EPISODES = "anime/getSingleAnime"
const POST_EPISODE = "anime/postEpisode"
const DELETE_EPISODE = "anime/deleteEpisode"

const deleteEpisode = (episodeId) => {
    return {
        type: DELETE_EPISODE,
        payload: episodeId
    }
}

export const deleteEpisodeThunk = (episodeId) => async(dispatch) => {
    const response = await fetch(`/api/anime/${episodeId}/delete`,{
        method: 'delete'
    })
    const data = await response.json()
    if(response.ok){
        // console.log("------------////////////")
        // console.log("DELETE EPISODE DATA: ", data)
        // console.log("///////////-------------")
        dispatch(deleteEpisode(data))
        return data
    }
}

const postEpisode = (episode) => {
    return {
        type: POST_EPISODE,
        payload: episode
    }
}

export const postEpisodeThunk = (animeId, episode) => async (dispatch) => {
    const response = await fetch(`/api/anime/${animeId}/episodes/new`,{
        method: 'post',
        body: episode
    })
    const data = await response.json()
    if(response.ok){
        dispatch(postEpisode(data))
        return data
    }
    return data
}

const getSingleAnimeEpisodes = (episodes) => {
    return {
        type: GET_ANIME_EPISODES,
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
        case DELETE_EPISODE:{
            let newState = {...state}
            delete newState[action.payload]
            return newState
        }
        case GET_ANIME_EPISODES:{
            let newState = {}
            newState = {...action.payload}
            return newState
        }
        case POST_EPISODE:{
            let newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }
        default:
            return state
    }
}

export default animeEpisodesReducer
