// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const EDIT_USER = "session/EDIT_USER";
const ADD_FAVORITE = "session/addUserFavorite"
const setUser = (user) => ({
	type: SET_USER,
	payload: user,
});

const removeUser = () => ({
	type: REMOVE_USER,
});

export const addUserFavorite = (favorite) => {
	return {
		type: ADD_FAVORITE,
		favorite
	}
}

export const editSingleSessionUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user
    }
}

export const addUserFavoriteThunk = (animeId) => async (dispatch) => {
	console.log('anime id inside the session thunk!!!!',animeId)
	dispatch(addUserFavorite(animeId))

}

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		const data = await response.json();
		if (data.errors) {
			return;
		}
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
		dispatch(setUser(data));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
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
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(removeUser());
	}
};

export const signUp = (username, email, password) => async (dispatch) => {
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	});

	if (response.ok) {
		const data = await response.json();
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
		dispatch(setUser(data));
		return null;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { user: action.payload };
		case REMOVE_USER:
			return { user: null };
		case EDIT_USER: {
			let newState = {}
			newState = { ...action.payload }
			return newState
		}
		case ADD_FAVORITE: {
			let newState = { ...state }
			newState.user.favorites[action.favorite] = action.favorite
		}
		default:
			return state;
	}
}
