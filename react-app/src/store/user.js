const GET_SINGLE_USER = "user/getSingleUser"
const DELETE_USER_FAVORITE = "user/deleteFavorite"
const POST_USER_FAVORITE = "user/postFavorite"
const EDIT_SINGLE_USER = "user/editSingleUser"

const postUserFavorite = (favorite) => {
    return {
        type: POST_USER_FAVORITE,
        payload: favorite
    }
}

export const postUserFavoriteThunk = (favorite) => async (dispatch)=>{
    const response = await fetch(`/api/users/favorites/new`, {
        method: "post",
        body: favorite
    })
    const data = await response.json()
    if(response.ok){
        console.log("------------////////////")
        console.log("POST USERFAVORITE DATA: ", data)
        console.log("///////////-------------")
        dispatch(postUserFavorite(data))
        return data
    }
    console.log("favorite POST response NOT ok")
    console.log("response: ",response)
    console.log("---------------")
    console.log("data: ",data)
    return null

}

//code below is to be editted
const editSingleUser = (user) => {
    return {
        type: EDIT_SINGLE_USER,
        payload: user
    }
}

export const editSingleUserThunk = (user, userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(editSingleUser(data));
        return data;
      }
}

// code above is to be editted

const deleteFavorite = (favoriteId) => {
    return {
        type: DELETE_USER_FAVORITE,
        payload: favoriteId
    }
}

export const deleteUserFavoriteThunk = (favoriteId) => async (dispatch) => {
    const response = await fetch(``,{
        method: 'delete',
        body: favoriteId
    })
    const data = await response.json()
    if(response.ok){

    }


}

const getSingleUser = (user) => {
    return {
        type: GET_SINGLE_USER,
        payload: user
    }
}

export const getSingleUserThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}`)
    const data = await response.json()
    console.log("-----------")
    console.log(data)
    console.log("-----------")
    if (response.ok) {
        // IF WE WANT TO NORMALIZE FAVORITES:
        const normalFavorites = {}
        const normalReviews = {}
        data.favorites.forEach((favorite) => {
            normalFavorites[favorite] = favorite
        })
        data.favorites = normalFavorites

        data.reviews.forEach((review) => {
            normalReviews[review.id] = review
        })
        data.reviews = normalReviews

        dispatch(getSingleUser(data))
        return data
    }
    console.log("user response NOT ok")
    console.log("response: ", response)
    console.log("---------------")
    console.log("data: ", data)
    return null
}

const initialState = {}

const userReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_SINGLE_USER: {
            let newState = {}
            newState = { ...action.payload }
            return newState
        }
        case POST_USER_FAVORITE: {
            let newState = {...state}
            newState[action.payload.animeId] = action.payload.animeId
        }
        //case below is to be editted
        case EDIT_SINGLE_USER:{
            let newState = {}
            newState = {...action.payload}
            return newState
        }
        default:
            return state
    }
}
export default userReducer