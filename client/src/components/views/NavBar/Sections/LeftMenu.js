import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/" style={{ fontSize: '1.2rem', color: 'red' }}>Home</a>
      </Menu.Item>
      <Menu.Item key="subscription">
        <a href="/subscription" style={{ fontSize: '1.2rem', color: 'red' }}>Subscriptions</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu