import DictionaryActionTypes from './dictionary.types'
import axios from 'axios'

export const createDictionary = (dictionary) => async dispatch => {

  const res = await axios.post('/dictionarys', dictionary)
  dispatch({
    type: DictionaryActionTypes.CREATE_DICTIONARY,
    payload: res.data.dictionary
  })
}

export const fetchAllDictionarys = () => async dispatch => {
  const res = await axios.get('/dictionarys')
  dispatch({
    type: DictionaryActionTypes.GET_ALL_DICTIONARYS,
    payload: res.data
  })
}

export const deleteDictionary = (id) => async dispatch => {
  const res = await axios.delete(`/dictionarys/${id}`)
  dispatch({
    type: DictionaryActionTypes.DELETE_DICTIONARY,
    payload: id
  })
}
