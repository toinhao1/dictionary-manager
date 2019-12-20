import DictionaryActionTypes from './dictionary.types'

const initialState = {
  displayDictionarys: [],
  currentDictionay: []
}

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {

    case (DictionaryActionTypes.CREATE_DICTIONARY):
      return {
        ...state,
        displayDictionarys: action.payload
      }

    case (DictionaryActionTypes.GET_ALL_DICTIONARYS):
      return {
        ...state,
        displayDictionarys: action.payload
      }

    case (DictionaryActionTypes.DELETE_DICTIONARY):
      return {
        ...state,
        displayDictionarys: state.displayDictionarys.filter(dictionary => dictionary._id !== action.payload)
      }

    default:
      return state;
  }
}

export default dictionaryReducer;