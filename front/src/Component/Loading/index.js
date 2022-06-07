import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const index = () => {
  return (
    <LoadingOutlined
    style={{
      fontSize: 89,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    }}
    spin
  />
  )
}

export default index