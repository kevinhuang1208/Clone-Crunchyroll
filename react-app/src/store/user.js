const GET_SINGLE_USER = "user/getSingleUser"

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
    if(response.ok){
        // IF WE WANT TO NORMALIZE FAVORITES:
        // const normalFavorites = {}
        // data.favorites.forEach((favorite)=>{
        //     normalFavorites[favorite.id] = favorite
        // })
        // data.favorites = normalFavorites
        dispatch(getSingleUser(data))
        return data
    }
    console.log("user response NOT ok")
    console.log("response: ",response)
    console.log("---------------")
    console.log("data: ",data)
    return null
}

const initialState = {}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_SINGLE_USER:{
            let newState = {}
            newState = {...action.payload}
            return newState
        }
        default:
            return state
    }
}
export default userReducer