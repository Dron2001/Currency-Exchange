import React from 'react'
import c from 'classnames'
import './index.scss'

const Row = ({ children, className }) => <div className={c('wrapperRow', className)}>{children}</div>

export default Row
