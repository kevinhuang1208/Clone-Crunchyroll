// import { editSingleSessionUser } from "./session"
// import { removeUser } from "./session"

const GET_SINGLE_USER = "user/getSingleUser"
const DELETE_USER_FAVORITE = "user/deleteFavorite"
const POST_USER_FAVORITE = "user/postFavorite"
const EDIT_SINGLE_USER = "user/editSingleUser"
const DELETE_SINGLE_USER = "user/deleteSingleUser"

//code below is to be editted
const deleteSingleUser = () => {
    return {
        type: DELETE_SINGLE_USER,
    }
}

export const deleteSingleUserThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/delete/${userId}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        console.log("BGFEIWUBGFIWEBGIWEBIGBIWEG")
        dispatch(deleteSingleUser())
        // dispatch(removeUser())
        return
    }
}

// code above is to be editted

const postUserFavorite = (favorite) => {
    return {
        type: POST_USER_FAVORITE,
        favorite
    }
}

export const postUserFavoriteThunk = (favorite) => async (dispatch) => {
    const response = await fetch(`/api/users/favorites/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            animeId: favorite
        }),
    })
    const data = await response.json()
    if (response.ok) {
        // console.log("------------////////////")
        // console.log("POST USERFAVORITE DATA: ", data)
        // console.log("///////////-------------")
        dispatch(postUserFavorite(favorite))
        return data
    }
    // console.log("favorite POST response NOT ok")
    // console.log("response: ", response)
    // console.log("---------------")
    // console.log("data: ", data)
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
    console.log("user: ", user)
    console.log("userId: ", userId)
    const response = await fetch(`/api/users/${userId}/edit`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    console.log("this is response before json", response)
    const data = await response.json();
    console.log("this is data", data)
    if (response.ok) {
        dispatch(editSingleUser(data));
        // dispatch(editSingleSessionUser(data))
        return data;
      }
    return data
    // console.log("user PUT response NOT ok")
    // console.log("response: ",response)
    // console.log("---------------")
    // console.log("data: ",data)
}

// code above is to be editted

const deleteFavorite = (favoriteId) => {
    return {
        type: DELETE_USER_FAVORITE,
        payload: favoriteId
    }
}

export const deleteUserFavoriteThunk = (favoriteId) => async (dispatch) => {
    const response = await fetch(``, {
        method: 'delete',
        body: favoriteId
    })
    const data = await response.json()
    if (response.ok) {

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
            let newState = { ...state }
            newState.favorites[action.favorite] = action.favorite
            return newState
        }
        //case below is to be editted
        case EDIT_SINGLE_USER: {
            let newState = {}
            let favoritesObj = {}
            newState = { ...action.payload.editedUser }
            console.log("THIS IS NEW STATE BEFORE FOREACH", newState)
            newState.favorites.forEach((favorite) => {
                favoritesObj[favorite.animeId] = favorite.animeId
            })
            newState.favorites = favoritesObj
            return newState
        }
        case DELETE_SINGLE_USER: {
            let newState = {}
            return newState
        }
        default:
            return state
    }
}
export default userReducer
