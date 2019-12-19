import axios from 'axios'

export const addDictionary = async (dictionary) => {
  const newDictionary = await axios.post('/dictionarys', dictionary)

  return newDictionary
}