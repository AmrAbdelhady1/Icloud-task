import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

const Foot = () => {
  return (
    <Layout style={{ height: 70, justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
      <Footer style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', color: '#637182' }}><a style={{ color: '#052346' }}>Got questions?</a>
       Take a look at our <a>FAQs</a>, talk to us on Twitter <a>@icloudready</a> or send an email to <a>team@icloud-ready.com</a>
      </Footer>
    </Layout>
  )
}

export default Foot