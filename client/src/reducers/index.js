import { combineReducers } from 'redux';
import toolBar from './toolBar';
import dashboard from './dashboard';
import websites from './websites';
import website from './website';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const Reducer = combineReducers({
	toolBar,
	dashboard,
	websites,
	website,
	routing: routerReducer,
    form: formReducer 
});

export default Reducer;
