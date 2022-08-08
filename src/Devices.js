import {Button } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'antd';
import RMenu from './RMenu';
import { Layout} from 'antd';
const { Header, Content} = Layout;

function Devices(children) {
  return (
    <>
      <Layout style={{background:'#F2F2FA' }}>
        <Header style={{background:'#F2F2FA' }}>
          <Row justify="end">
            <Col span={4} push={19}>
            <RMenu></RMenu>   
            </Col>
            <Col span={18} pull={7}>
            </Col>
          </Row>
        </Header>
        <hr style={{margin: '0vh -3vh', width:'165vh', heigh:'0', color:'#ECEDF6',}} color='#ECEDF6'></hr>
        <Content
          style={{
            margin: '0 16px',
            background:'#F2F2FA'
          }}
        >
          <div
            style={{
              margin: '2vh',
              minHeight: 200,
            }}
          >
            <h1><b>Приборы</b></h1>
            <Button type="primary"style={{width: '51vh',  fontSize: '90%',}} size='large'><Link to="#/devices/add">Добавить оборудование</Link></Button>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default Devices;
