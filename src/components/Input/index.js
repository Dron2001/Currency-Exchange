import React, { memo } from 'react'
import { Input as AntdInput } from 'antd'
import './index.scss'

const Input = ({ className, ...props }) => <AntdInput className={`wrapperAntdInput ${className}`} {...props} />

export default memo(Input)
