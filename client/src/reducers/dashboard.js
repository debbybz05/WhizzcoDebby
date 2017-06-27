import * as types from '../constants/ActionTypes'

const dash= (state={},action) => {
	switch  (action.type) {
	case types.GET_GENERAL_DATA:
		return Object.assign({}, state, {
			Imppressisons: action.Imppressisons,
			Clicks:action.Clicks,
			CTR:action.CTR,
			eCPM:action.eCPM
		});
	default:
		return state;
	}
};

export default dash;
