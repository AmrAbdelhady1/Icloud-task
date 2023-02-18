/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button, Card, Col, Divider, List, Row, Space, Typography } from 'antd';
import { PlusCircleOutlined, FormOutlined } from '@ant-design/icons';
import { useStateContext } from '../context/StateContext';
import cards from '../fakers/cards'

const { Meta } = Card;

const Cardcom = () => {

    const { onAdd, onAddKit } = useStateContext();

    return (
        // <List
        //     grid={{ column: 4 }}
        // >
        //     <Space size={35}>
        //         {cards.map((item, idx) =>
        //             <Card
        //                 key={idx}
        //                 style={{ width: 270, height: 363, justifyContent: 'center' }}
        //                 bodyStyle={{ backgroundColor: '#0A488F', borderRadius: 6, color: 'white' }}
        //                 cover={
        //                     <img
        //                         alt="example"
        //                         src="/assets/Customer.png"
        //                         height={137}
        //                         style={{ width: 134, justifyContent: 'center', margin: 20 }}
        //                     />
        //                 }
        //             >
        //                 <Meta
        //                     style={{ width: 262, height: 140 }}
        //                     title={item.title}
        //                     description={item.desc}
        //                 />
        //                 <span>100 DTSU*</span>
        //                 <Button type='primary'
        //                     onClick={() => onAdd(item)}
        //                 >a</Button>
        //                 <Button type='primary'
        //                     onClick={() => onAddKit(item)}
        //                 >a</Button>
        //             </Card>
        //         )}
        //     </Space>
        // </List>
        <div style={{ padding: 16 }}>
            <Row gutter={[16, 16]}>
                {cards.map((card) => (
                    <Col key={card.id} xs={24} sm={12} md={6}>
                        <Card
                            cover={<img src={card.img} alt={card.title}
                                style={{ height: 100, paddingLeft: 40, paddingRight: 40, marginTop: 40, marginBottom: 40 }}
                            />}
                            bodyStyle={{ backgroundColor: card.bgcolor }}
                            actions={[
                                <div key={card.id} style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                                    <Button onClick={() => onAdd(card)}><PlusCircleOutlined /></Button>
                                    <Button onClick={() => onAddKit(card)}><FormOutlined /></Button>
                                </div>
                            ]}
                        >
                            <Meta title={card.title} description={card.desc} />
                            <Typography style={{ marginTop: 10, color: 'white' }}>{card.price} DTSU*</Typography>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    )
}

export default Cardcom