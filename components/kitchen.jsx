/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useStateContext } from '../context/StateContext';
import { Badge, Button, Divider, Drawer, Row, Col, Typography, } from 'antd';
import { HddOutlined, AimOutlined, CloudDownloadOutlined } from '@ant-design/icons';

const Kitchen = () => {
    const { kittotalPrice, kittotalQuantities, kitItems, setShowKit, showKit, status } = useStateContext();
    return (
        <div>
            <Badge
                onClick={() => {
                    setShowKit(true);
                }}
                count={kittotalQuantities}
            >
                <HddOutlined />
            </Badge>
            <Drawer
                open={showKit}
                onClose={() => setShowKit(false)}
                title="Your Run Kitchen"
                contentWrapperStyle={{ width: 500 }}
            >
                {kitItems.length < 1 &&
                    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                        <Col>
                            <img src="/assets/Group.png" alt="" />
                            <h3>Your shopping bag is empty</h3>
                            <Button
                                type="primary"
                                onClick={() => setShowKit(false)}
                            >
                                Start add your requests here
                            </Button>
                        </Col>
                    </Row>
                }
                {kitItems.length >= 1 &&
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Request</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <span>Status</span>
                            <span>O/P Link</span>
                        </div>
                    </div>
                }
                {kitItems.length >= 1 && <Divider />}
                {kitItems.length >= 1 && kitItems.map((item) =>
                    <div key={item?.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <img src={item?.img} alt="" width={80} height={80} />
                            <div>
                                <Typography>Knowledge Transfer</Typography>
                                <Typography style={{ color: '#637182' }}>Private Training, {item?.price} DTSU</Typography>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <Button style={{ color: item.status }}>
                                <AimOutlined />
                            </Button>
                            <Button type='primary'>
                                <CloudDownloadOutlined />
                            </Button>
                        </div>
                    </div>
                )}
                {kitItems.length >= 1 &&
                    <div>
                        <Divider />
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00244D', marginBottom: 20 }}>
                            <Typography>Units Under Processing</Typography>
                            <Typography style={{ color: '#0097C2' }}>{kittotalPrice} DTSUs</Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00244D' }}>
                            <Typography>Units Completed</Typography>
                            <Typography style={{ color: '#0097C2' }}>No, Inclusive in your package</Typography>
                        </div>
                        <Divider />
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00244D', marginBottom: 20 }}>
                            <Typography>Total Units Consumed</Typography>
                            <Typography style={{ color: '#0097C2' }}>{kittotalPrice} DTSUs</Typography>
                        </div>
                        <Button type='primary' style={{ borderRadius: 20, width: '100%', marginBottom: 20 }} onClick={status}>
                            Refresh Status
                        </Button>
                        <Button style={{ borderRadius: 20, width: '100%', marginBottom: 20 }} onClick={() => setShowKit(false)}>
                            Back to Your Dashboard
                        </Button>
                        <div style={{ display: 'flex', alignItems: 'start', gap: 20, backgroundColor: '#ECF6FE', padding: 20, borderRadius: 10 }}>
                            <img src="/assets/infocircle.png" alt="" />
                            <Typography>Some requests can take a week or more to be delivered and may be subject to <a>dependency resolutions related to your system of records version</a></Typography>
                        </div>
                    </div>
                }
            </Drawer>
        </div>
    )
}

export default Kitchen