import React from 'react'
import { Avatar } from 'antd';
import { Cart, Kitchen } from '.';

const Navbar = () => {
  const avatarArray = [
    '/assets/avatar/avatar1.png',
    '/assets/avatar/avatar2.png',
    '/assets/avatar/avatar3.png',
    '/assets/avatar/avatar4.png',
    '/assets/avatar/avatar5.png',
    '/assets/avatar/avatar5.png', '/assets/avatar/avatar3.png', '/assets/avatar/avatar2.png',
  ];
  return (
    <div style={{ paddingLeft: 135, paddingRight: 135, height: 90, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '24px', color: '#00244D' }}>Welcome to iCloudReady!</span>
        <span style={{ fontSize: '16px', color: '#637182', marginLeft: 2 }}>You have started your <span style={{ color: '#00244D' }}>30 day trial</span></span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar.Group
          maxCount={5}
          size="large"
          maxStyle={{
            color: "#E6E6E6",
            backgroundColor: "#D3D3D3",
            cursor: "pointer",
            border: '1px solid #FFFFFF'
          }}
        >
          {avatarArray.map((avatar, index) =>
            <Avatar key={index} src={avatar} style={{ marginRight: '-10px', border: '1px solid #FFFFFF', cursor: "pointer" }} />
          )}
        </Avatar.Group>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <span style={{ fontSize: '20px', color: '#637182' }}>Our architects are here to help</span>
          <a style={{ fontSize: '16px', marginLeft: 2, color: '#0097C2' }}>Book a free session</a>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 30 }}>
        <Cart />
        <Kitchen />
      </div>
    </div>
  )
}

export default Navbar