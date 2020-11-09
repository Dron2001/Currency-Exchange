import React, { useEffect, useState, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { payMethods, calculate } from 'modules/session/actions'
import { Box, Row } from 'components'
import { getIdByName, getNameByBase } from 'utils'
import Section from './Section'
import './index.scss'

const Money = () => {
  const [selectes, setSelectes] = useState({})
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const { invoice, withdraw, sell, buy } = useSelector(({ session }) => session)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(payMethods())
  }, [dispatch])

  useEffect(() => {
    if (sell?.name && buy?.name) {
      setValues({ buy: buy.value, sell: sell.value })
    }
  }, [sell, buy])

  const sendValues = debounce((base, value) => {
    const data = {
      base: getNameByBase(base),
      amount: +value,
      invoicePayMethod: getIdByName(invoice, selectes?.sell),
      withdrawPayMethod: getIdByName(withdraw, selectes?.buy),
    }

    dispatch(calculate(data)).then(() => setLoading(false))
  }, 1500)

  const onChangeSelectes = useCallback((name, value) => {
    setSelectes(prev => ({ ...prev, [name]: value }))

    if (Object.keys(values).length) {
      setLoading(true)
      sendValues(name, values[name])
    }
  }, [values])

  const onChange = useCallback((base, value) => {
    setLoading(true)

    if (value.length) {
      setValues(prev => ({ ...prev, [base]: +value }))
      sendValues(base, value)
    } else {
      setValues({})
    }
  }, [invoice, withdraw, selectes])

  const onSubmit = () => {
    if (Object.keys(values).length) {
      history.push('/details')
    }
  }

  return (
    <Box actions={['submit']} onSubmit={onSubmit} loading={loading}>
      <Row>
        <Section
          title='sell'
          data={invoice}
          onChangeSelectes={onChangeSelectes}
          onChangeInput={onChange}
          value={values?.sell}
        />
        <Section
          title='buy'
          data={withdraw}
          onChangeSelectes={onChangeSelectes}
          onChangeInput={onChange}
          value={values?.buy}
        />
      </Row>
    </Box>
  )
}

export default memo(Money)
