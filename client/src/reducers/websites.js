import * as types from '../constants/ActionTypes'

const webs= (state={},action) => {
	switch  (action.type) {
	case types.GET_WEBSITES:
		return Object.assign({}, state, {
			websites:action.websites
		});
	default:
		return state;
	}
};

export default webs;
