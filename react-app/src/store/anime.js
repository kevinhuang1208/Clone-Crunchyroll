
const GET_ALL_ANIME = "anime/getAllAnime"
const DELETE_ANIME = "anime/deleteAnime"
const POST_ANIME = "anime/postAnime"
const EDIT_ANIME = "anime/editAnime"

const postAnime = (anime) => {
    return {
        type: POST_ANIME,
        payload: anime
    }
}

const editAnime = (animeEdit) => {
    return {
        type: EDIT_ANIME,
        payload: animeEdit
    }
}

export const editAnimeThunk = (animeId, anime) => async (dispatch) => {
    const res = await fetch(`/api/anime/${animeId}/edit`, {
        method: 'PUT',
        body: anime
    })
    const edited_data = await res.json()
    if (res.ok) {
        dispatch(editAnime(edited_data))
        return edited_data
        //this return will return the to_dict for the anime
    } else {
        return edited_data
        //this return will return errors key with [] value
    }

}

export const postAnimeThunk = (anime) => async (dispatch) => {
    // console.log("anime in thunk: ", anime)
    const response = await fetch("/api/anime/new", {
        method: "POST",
        body: anime
    })
    const data = await response.json()
    if (response.ok) {
        dispatch(postAnime(data))
        return data 
    }
    return data
}

const deleteAnime = (animeId) => {
    return {
        type: DELETE_ANIME,
        animeId
    }
}
// need to get our anime to have a cascading delete before we implement delete anime

const getAllAnime = (anime) => {
    return {
        type: GET_ALL_ANIME,
        payload: anime
    }
}

export const deleteAnimeThunk = (animeId) => async (dispatch) => {
    // const response = await fetch('/api/anime/')
    const res = await fetch(`/api/anime/${animeId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(deleteAnime(animeId))
    } else {
        return false
    }
}

export const getAllAnimeThunk = () => async (dispatch) => {
    const response = await fetch('/api/anime')
    const data = await response.json()

    if (response.ok) {
        const normalAnime = {}
        data.anime.forEach((show) => {
            normalAnime[show.id] = show
        })
        dispatch(getAllAnime(normalAnime))
        // console.log("normalAnime: ", normalAnime)
        return normalAnime
    }
    // console.log("anime response NOT ok")
    // console.log("response: ", response)
    // console.log("---------------")
    // console.log("data: ", data)
    return null
}

const initialState = {}

const animeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ANIME: {
            let newState = { ...state }
            newState = { ...action.payload }
            return newState
        }
        case POST_ANIME: {
            let newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }
        case EDIT_ANIME: {
            let newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }
        case DELETE_ANIME: {
            let newState = { ...state }
            delete newState[action.animeId]
            return newState
        }
        default:
            return state
    }
}

export default animeReducer
