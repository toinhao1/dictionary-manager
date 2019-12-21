import DictionaryActionTypes from './dictionary.types'

const initialState = {
  displayDictionarys: [],
  currentDictionary: []
}

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {

    case (DictionaryActionTypes.CREATE_DICTIONARY):
      return {
        ...state,
        displayDictionarys: [...state.displayDictionarys, action.payload]
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

    case (DictionaryActionTypes.EDIT_DICTIONARY):
      return {
        ...state,
        displayDictionarys: state.displayDictionarys.map(dictionary => {
          return (dictionary._id === action.payload._id) ?
            dictionary = action.payload
            : dictionary
        })
      }

    case (DictionaryActionTypes.GET_ONE_DICTIONARY):
      return {
        ...state,
        currentDictionary: action.payload
      }

    default:
      return state;
  }
}

export default dictionaryReducer;