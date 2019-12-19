import { combineReducers } from 'redux';
import dictionaryReducer from './dictionary/dictionary.reducer'

export const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
});
