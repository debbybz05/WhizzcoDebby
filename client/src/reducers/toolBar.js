import * as types from '../constants/ActionTypes'

const tool= (state={},action) => {
	switch  (action.type) {
	case types.REQUEST_LOGIN:
		return Object.assign({}, state, {
			isFetching: true
		});
	case types.RECEIVE_LOGIN:
		return Object.assign({}, state,
			{isFetching:false}
			,(action.error ? {error: action.error}: null)
			,{isLogin: action.isLogin}
		);
	/*case types.LOGIN:
		return Object.assign({}, state, {
			isLogin:action.isLogin,
			error:action.error
		});*/
	case types.LOGOUT:
		return Object.assign({}, state, {
			isLogin:action.isLogin
		});
	case types.SET_ERROR:
		return Object.assign({}, state, {
			error:action.error
		});
	default:
		return state;
	}
};

export default tool;
