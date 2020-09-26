const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD":
			const newMeme = {
				id: action.payload.id,
				img: action.payload.img,
				topText: action.payload.topText,
				botText: action.payload.botText,
				color: action.payload.color
			};
			return { ...state, memes: [ ...state.memes, newMeme ] };

		case "DELETE":
			const newMemes = state.memes.filter((m) => m.id !== action.payload.id);
			return { ...state, memes: [ ...newMemes ] };

		default:
			return state;
	}
}

export default rootReducer;
