import React, { memo } from 'react'
import c from 'classnames'
import './index.scss'

const Typography = ({ title = '', className }) => <h1 className={c('typography', className)}>{title}</h1>

export default memo(Typography)
