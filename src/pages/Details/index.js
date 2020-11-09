import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { bids } from 'modules/session/actions'
import { Box, Row, Typography } from 'components'
import './index.scss'

const Details = () => {
  const [loading, setLoading] = useState(false)
  const { sell, buy } = useSelector(({ session }) => session)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!sell?.name || !buy?.name) {
      goTo('/')()
    }
  }, [])

  const goTo = path => () => history.push(path)

  const onSubmit = () => {
    setLoading(true)

    const data = {
      amount: sell.value,
      base: 'invoice',
      invoicePayMethod: sell.name.id,
      withdrawPayMethod: buy.name.id,
    }

    dispatch(bids(data))
      .then(res => res && goTo('/success')())
      .finally(() => setLoading(false))
  }

  return (
    <Box actions={['submit', 'cancel']} className='wrapperDetails' onCancel={goTo('/')} onSubmit={onSubmit} loading={loading}>
      <Typography title='Details' className='title' />

      <Row>
        <h3 className='titleDetail'>Sell</h3>
        <p className='valueDetail'>{sell.value} {sell?.name?.name}</p>
      </Row>

      <Row className='row'>
        <h3 className='titleDetail'>Buy</h3>
        <p className='valueDetail'>{buy.value} {buy?.name?.name}</p>
      </Row>
    </Box>
  )
}

export default Details
