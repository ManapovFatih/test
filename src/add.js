import React from 'react';
import DataR from './DataR';
import {Col, Row} from 'antd';
import RMenu from './RMenu';
import Hadd from './Hadd';
import { Layout} from 'antd';
const { Header, Content} = Layout;



function Add() {
  return (
    <>
        <Layout style={{background:'#F2F2FA' }}>
          <Header style={{background:'#F2F2FA' }}>
            <Row justify="end">
              <Col span={4} push={19}>
              <RMenu></RMenu>   
              </Col>
              <Col span={18} pull={7}>
                <Row>
                 <Hadd/>
                </Row>
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
                <h1><b>Добавить оборудование</b></h1>
                <DataR></DataR>
            </div>
          </Content>
        </Layout>
    </>
  );
}

export default Add;