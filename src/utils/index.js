import { notification } from 'antd'

export const getIdByName = (data, name) => data?.find(i => i.name === name)?.id || data[0]?.id

export const getNameByBase = base => base === 'sell' ? 'invoice' : 'withdraw'

export const showError = error => notification.error({ message: error?.response?.data?.message })
