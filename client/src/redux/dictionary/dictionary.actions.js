import DictionaryActionTypes from './dictionary.types'
import axios from 'axios'

export const createDictionary = (dictionary) => async dispatch => {

  const res = await axios.post('/dictionarys', dictionary)
  dispatch({
    type: DictionaryActionTypes.CREATE_DICTIONARY,
    payload: res.data
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
    payload: res.data._id
  })
}

export const editDictionary = (id, formData) => async dispatch => {
  const res = await axios.patch(`/dictionarys/${id}`, formData)

  console.log(res.data)

  dispatch({
    type: DictionaryActionTypes.EDIT_DICTIONARY,
    payload: res.data
  })
}

export const getOneDictionary = (id) => async dispatch => {
  const res = await axios.get(`/dictionarys/${id}`)

  const dictionarysToEdit = res.data.dictionary.map(({ tableData, ...dictionary }) => dictionary)

  dispatch({
    type: DictionaryActionTypes.GET_ONE_DICTIONARY,
    payload: dictionarysToEdit
  })
}