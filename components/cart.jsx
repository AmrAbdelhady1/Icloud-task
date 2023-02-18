/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useStateContext } from '../context/StateContext';
import { Badge, Button, Divider, Drawer, InputNumber, Typography, Row, Col } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';

const Cart = () => {

    const { Checkout, totalPrice, totalQuantities, cartItems, setShowCart, showCart, onRemove } = useStateContext();

    return (
        <div>
            <Badge
                onClick={() => {
                    setShowCart(true);
                }}
                count={totalQuantities}
            >
                <ShoppingCartOutlined />
            </Badge>
            <Drawer
                open={showCart}
                onClose={() => setShowCart(false)}
                title="Your Cart"
                contentWrapperStyle={{ width: 500 }}
            >
                {cartItems.length < 1 && (
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
                )}
                {cartItems.length >= 1 &&
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Product</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <span>Qty.</span>
                            <span>Remove</span>
                        </div>
                    </div>
                }
                {cartItems.length >= 1 && <Divider />}
                {cartItems.length >= 1 && cartItems.map((item) =>
                    <div key={item?.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <img src={item?.img} alt="" width={80} height={80} />
                            <div>
                                <Typography>{item?.title}</Typography>
                                <Typography style={{ color: '#637182' }}>Default Title, {item?.price} DTSU</Typography>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
                            <InputNumber min={0} value={item?.qty} style={{ width: 50 }} />
                            <Button danger onClick={() => onRemove(item)}>
                                <DeleteOutlined />
                            </Button>
                        </div>
                    </div>
                )}
                {cartItems.length >= 1 &&
                    <div>
                        <Divider />
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00244D', marginBottom: 20 }}>
                            <Typography>Subtotal</Typography>
                            <Typography style={{ color: '#0097C2' }}>{totalPrice} DTSUs</Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00244D' }}>
                            <Typography>New Payment</Typography>
                            <Typography style={{ color: '#0097C2' }}>No, Inclusive in your package</Typography>
                        </div>
                        <Divider />
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#00244D', marginBottom: 20 }}>
                            <Typography>Total Units Consumed</Typography>
                            <Typography style={{ color: '#0097C2' }}>{totalPrice} DTSUs</Typography>
                        </div>
                        <Button type='primary' style={{ borderRadius: 20, width: '100%', marginBottom: 20 }} onClick={Checkout}>
                            Checkout
                        </Button>
                        <Button style={{ borderRadius: 20, width: '100%', marginBottom: 20 }} onClick={() => setShowCart(false)}>
                            Back to Run Information
                        </Button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 160, backgroundColor: '#FCF9E1', padding: 20, borderRadius: 10, marginBottom: 20 }}>
                            <Typography>Your have made a great choose Let's Run and be ready for a surprise</Typography>
                            <img src="/assets/giftbox.png" alt="" />
                        </div>
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

export default Cart