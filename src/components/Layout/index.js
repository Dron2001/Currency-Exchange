import React, { memo } from 'react'
import './index.scss'

const Layout = ({ children }) => (
  <div className='layout'>
    {children}
  </div>
)

export default memo(Layout)
