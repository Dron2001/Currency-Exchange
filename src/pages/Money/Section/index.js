import React, { memo } from 'react'
import { Typography, Select, Input } from 'components'
import './index.scss'

const Section = ({ title, data, onChangeSelectes, onChangeInput, value }) => {
  return (
    <div className='boxSection'>
      <Typography title={title} className='title' />

      <Select data={data} onChange={v => onChangeSelectes(title, v)} />

      <Input
        type='number'
        placeholder='money'
        className='input'
        onChange={e => onChangeInput(title, e.target.value)}
        value={value}
      />
    </div>
  )
}

export default memo(Section)
