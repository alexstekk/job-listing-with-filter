import { combineReducers } from 'redux';

import { positionsReducer } from './positions/positions-reducer';
import {filtersReducer} from './filters/filters-reducer'

export const rootReducer = combineReducers({
	positions: positionsReducer,
	filters: filtersReducer,
});
