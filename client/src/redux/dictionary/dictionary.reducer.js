import DictionaryActionTypes from './dictionary.types'
import { addDictionary } from './dictionary.utils'

const initialState = {
  displayDictionarys: {},
  currentDictionay: []
}

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case (DictionaryActionTypes.CREATE_DICTIONARY):
      return { ...state, displayDictionarys: addDictionary(action.payload) }
    default:
      return state;
  }
}

export default dictionaryReducer;