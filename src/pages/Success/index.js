import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography } from 'components'
import SuccessImg from './Success.png'
import './index.scss'

const Success = () => {
  const history = useHistory()

  const onSubmit = () => history.push('/')

  return (
    <Box actions={['submit']} className='wrapperSuccess' titleSubmit='Home' onSubmit={onSubmit}>
      <img src={SuccessImg} alt='success' className='img' />

      <Typography title='Details' className='title' />

      <p className='desc'>Your exchange order has been placed successfully and will be processed soon.</p>
    </Box>
  )
}

export default Success
