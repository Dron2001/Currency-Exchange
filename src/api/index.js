import axios from 'axios'

const METHOD = 'https://involve-it.com/test_front/api'

const payMethods = () => axios.get(`${METHOD}/payMethods`)

const calculate = (base, amount, invoicePayMethod, withdrawPayMethod) =>
  axios.get(`${METHOD}/payMethods/calculate?base=${base}&amount=${amount}&invoicePayMethod=${invoicePayMethod}&withdrawPayMethod=${withdrawPayMethod}`)

const bids = data => axios.post(`${METHOD}/bids`, data)

export default { payMethods, calculate, bids }
