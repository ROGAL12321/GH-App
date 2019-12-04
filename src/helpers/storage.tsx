import storageHelper from 'storage-helper'

export const getItem = (key: string) => storageHelper.getItem(key)
export const setItem = (key: string, value: any) => storageHelper.setItem(key, value)
