import {INCREASE, DECREASE, GETMUSICLIST} from './action-type'
import {reqMusicList} from '../api'

export const increase = () => ({type: INCREASE})
export const decrease = data => ({type: DECREASE, data})

const addMusicList = data => ({type: GETMUSICLIST, data})
export const getList = () => {
  return async dispatch => {
    const res = await reqMusicList()
    const {data} = res
    dispatch(addMusicList(data))
  }
}
