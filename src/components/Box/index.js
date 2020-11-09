import React, { memo } from 'react'
import { Button } from 'antd'
import c from 'classnames'
import './index.scss'

const Box = ({ children, actions = [], className, onSubmit, onCancel, titleSubmit, loading }) => {
  return (
    <div className={c('wrapperBox', className)}>
      {children}

      <div className='buttons'>
        {actions.includes('cancel') && <Button className='cancel' onClick={onCancel}>Cancel</Button>}
        {actions.includes('submit') && <Button className='submit' onClick={onSubmit} loading={loading}>{titleSubmit || 'Exchange'}</Button>}
      </div>
    </div>
  )
}

export default memo(Box)
