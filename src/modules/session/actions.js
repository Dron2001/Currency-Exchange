import api from 'api'
import { PAY_METHOD, CALCULATE, RESET_MONEY } from './constants'
import { showError } from 'utils'

const action = (type, payload) => ({ type, payload })

export const payMethods = () => dispatch => api.payMethods()
  .then(({ data }) => dispatch(action(PAY_METHOD, data)))
  .catch(showError)

export const calculate = obj => dispatch => api.calculate(obj.base, obj.amount, obj.invoicePayMethod, obj.withdrawPayMethod)
  .then(({ data }) => {
    let money = { invoiceId: obj.invoicePayMethod, withdrawId: obj.withdrawPayMethod }

    if (obj.base === 'invoice') {
      money = { ...money, invoice: obj.amount, withdraw: data.amount }
    } else {
      money = { ...money, invoice: data.amount, withdraw: obj.amount }
    }

    dispatch(action(CALCULATE, money))

    return money
  })
  .catch(showError)

export const bids = data => dispatch => api.bids(data)
  .then(({ data }) => {
    if (data?.message === 'Success') {
      dispatch(action(RESET_MONEY))
      return true
    }
  })
  .catch(showError)
