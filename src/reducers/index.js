import { combineReducers } from 'redux';
//import category from './category';

import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const Reducer = combineReducers({
	//category,
	routing: routerReducer,
    form: formReducer 
});

export default Reducer;
