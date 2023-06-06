const GET_ANIME_REVIEWS = "anime/getSingleReviews"
const POST_ANIME_REVIEW = "anime/postReview"
const DELETE_ANIME_REVIEW = "anime/deleteReview"

const postAnimeReview = (review) => {
    return {
        type: POST_ANIME_REVIEW,
        payload: review
    }
}

export const postAnimeReviewThunk = (review, animeId) => async (dispatch) =>{
    const response = await fetch(`/api/anime/${animeId}/reviews/new`, {
        method: 'post',
        body: review
    })
    const data = await response.json()
    console.log("-----------")
    console.log(data)
    console.log("-----------")
    if(response.ok){
        dispatch(postAnimeReview(data))
        return data
    }
    console.log("episode POST response NOT ok")
    console.log("response: ",response)
    console.log("---------------")
    console.log("data: ",data)
    return null
}

export const editAnimeReviewThunk = (review) => async (dispatch) =>{
    const response = await fetch(`-----`, {
        method: 'put',
        body: review
    })
    const data = await response.json()
    console.log("-----------")
    console.log(data)
    console.log("-----------")
    if(response.ok){

    }
}

const getSingleAnimeReviews = (reviews) => {
    return {
        type: GET_ANIME_REVIEWS,
        payload: reviews
    }
}

export const getAnimeReviewsThunk = (animeId) => async (dispatch) =>{
    const response = await fetch(`/api/anime/${animeId}/reviews`)
    const data = await response.json()
    console.log("-----------")
    console.log(data)
    console.log("-----------")
    if(response.ok){
        const normalReviews = {}
        // console.log(typeof data.reviews)
        // if(typeof data.reviews == "Object")
        data.reviews.forEach((review) => {
            normalReviews[review.id] = review
        })
        dispatch(getSingleAnimeReviews(normalReviews))
        return normalReviews
    }
    console.log("reviews response NOT ok")
    console.log("response: ",response)
    console.log("---------------")
    console.log("data: ",data)
    return null
}


const initialState = {}
// we could change the state here to be instead a dictionary of animeIDs and make it so that
// the thunk is updating the reviews for the specific anime ID instead so that we can persist the reviews
// when navigating from anime1 to anime2 back to anime1
const animeReviewsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ANIME_REVIEWS:{
            let newState = {}
            newState = {...action.payload}
            return newState
        }
        case POST_ANIME_REVIEW:{
            let newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        }
        default:
            return state
    }
}

export default animeReviewsReducer
