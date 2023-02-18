/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from 'antd';
import { SketchOutlined } from '@ant-design/icons'
import { Cardcom } from '.';

const Hero = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(315deg, #00244D 50%, #97E0F3 50%, #FFFFFF 100%)', paddingTop: 50, paddingLeft: 140, paddingRight: 140, height: '100%'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#0097C2' }}>
                <h1>Get Support <SketchOutlined /></h1>
                <Button type="primary" shape="circle" icon={<SketchOutlined />} size={'large'} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </div>

            <Cardcom />

            <div style={{display:'flex', gap:20, justifyContent:'end', color:'white',paddingBottom:50,marginTop:20}}>
                <span><img alt='' src='/assets/stt2.png' />   Remaining DTSUs:   200</span>
                <span><img alt='' src='/assets/stt.png' />   Consumed DTSUs:    200</span>
            </div>
        </div>
    )
}

export default Hero