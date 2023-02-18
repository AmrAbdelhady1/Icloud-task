import React from 'react'
import { Layout, Space } from 'antd';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      width={42}
      style={{ backgroundColor: '#0097C2', color: 'white', position: 'fixed', height: '100vh', zIndex: 10 }}>
    </Sider>
  )
}

export default Sidebar