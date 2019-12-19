import DictionaryActionTypes from './dictionary.types'

export const createDictionary = dictionary => ({
  type: DictionaryActionTypes.CREATE_DICTIONARY,
  payload: dictionary
})