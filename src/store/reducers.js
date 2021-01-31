const initialState = {
	signedIn: false,
	user: null
};

export function rootReducer (state=initialState, action) {
	const {type, payload} = action;
	console.log(action)

	switch (type) {
		case "SIGN_OUT":
			return {
				...state,
				signedIn: false
			}

		case "SIGN_IN":
			return {
				...state,
				signedIn: true,
				user: payload
			}

			default: return state
	}
};
