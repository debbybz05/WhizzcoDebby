import * as types from '../constants/ActionTypes'

const webs= (state={},action) => {
	switch  (action.type) {
	case types.GET_WEBSITE:
		return Object.assign({}, state, {
			key:action.key,
			campaigns:action.campaigns
		});
	default:
		return state;
	}
};

export default webs;
