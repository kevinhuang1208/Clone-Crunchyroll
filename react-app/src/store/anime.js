
const GET_ALL_ANIME = "anime/getAllAnime"


const getAllAnime = (anime) => {
    return {
        type: GET_ALL_ANIME,
        payload: anime
    }
}

export const getAllAnimeThunk = () => async(dispatch) =>{
        const response = await fetch('/api/anime')
        const data = await response.json()

        if(response.ok){
            const normalAnime = {}
            data.anime.forEach((show) => {
                normalAnime[show.id] = show
            })
            dispatch(getAllAnime(normalAnime))
            console.log("normalAnime: ", normalAnime)
            return normalAnime
        }
        console.log("response NOT ok")
        console.log("response: ",response)
        console.log("---------------")
        console.log("data: ",data)
}

const initialState = {}

const animeReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_ANIME:{
            let newState = {...state}
            newState = {...action.payload}
            return newState
        }
        default:
            return state
    }
}

export default animeReducer