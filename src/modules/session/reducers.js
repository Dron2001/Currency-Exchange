import { PAY_METHOD, CALCULATE, RESET_MONEY } from './constants'

export const initialState = {
  invoice: [],
  withdraw: [],
  sell: {},
  buy: {},
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
  case PAY_METHOD: {
    const { invoice, withdraw } = payload
    return { ...state, invoice, withdraw }
  }
  case CALCULATE: {
    const { invoice, withdraw, invoiceId, withdrawId } = payload

    const invoiceObj = state.invoice.find(i => i.id === invoiceId)
    const withdrawObj = state.withdraw.find(i => i.id === withdrawId)

    return { ...state, sell: { name: invoiceObj, value: invoice }, buy: { name: withdrawObj, value: withdraw } }
  }
  case RESET_MONEY:
    return { ...state, sell: {}, buy: {} }
  default:
    return state
  }
}
