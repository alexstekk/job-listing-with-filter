import { combineReducers } from 'redux';

import { positionsReducer } from './positions/positions-reducer';

export const rootReducer = combineReducers({
	positions: positionsReducer,
});
