import api from './axiosInstance'
import type { HotItem } from '../types/zhihu'

export const fetchHotList = () => api.get<{data: HotItem[]}>('/hot')

export const addHotItem = (item: Partial<HotItem>) => api.post("/hot",item);

export const updateHotItem = (id:number,updateItem:Partial<HotItem>) => api.put(`/hot/${id}`,updateItem)

export const deleteHotItem = (id:number) => api.delete(`/hot/${id}`)