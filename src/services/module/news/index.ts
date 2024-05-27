'use client'

import client from '../../ApiClient'
import { IListAllNewsResponse } from './interface'

const list = (): Promise<IListAllNewsResponse[]> => client.api.get('/news')
const getById = (id: string): Promise<IListAllNewsResponse> => client.api.get(`/news/${id}`)
const listSecondary = (): Promise<IListAllNewsResponse[]> => client.api.get('/news/secondary')

export {
    list,
    getById,
    listSecondary
}
