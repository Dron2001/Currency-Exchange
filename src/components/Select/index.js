import React, { memo } from 'react'
import { Select as AntdSelect } from 'antd'
import './index.scss'

const { Option } = AntdSelect

const Select = ({ data = [], ...props }) => data?.length ? (
  <AntdSelect defaultValue={data[0].name} className='wrapperSelect' {...props}>
    {data.map(i => <Option key={i.id} value={i.name}>{i.name}</Option>)}
  </AntdSelect>
) : null

export default memo(Select)
