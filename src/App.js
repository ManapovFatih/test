import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Devices from './Devices';
import Add from './add';
import Plan from './Plan';
import Main from './Main';
import Employees from './Employees';
import Setting from './Setting';
import Help from './Help';
import Off from './Off';
import Error from './Error';
import 'antd/dist/antd.css';
import Image1 from './Image1';
import { Layout, Menu} from 'antd';
import React from 'react';
import UserIcon from './UserIcon.svg';
import Vector from './Vector.svg';
import Vector1 from './Vector1.svg';
import Vector2 from './Vector2.svg';
import Vector3 from './Vector3.svg';
import Vector4 from './Vector4.svg';
import warehouse from './warehouse.svg';
const {Sider } = Layout;
function getItem(label, icon) {
  return {
    icon,
    label,
  };
}
const items1 = [
  getItem(<p style={{fontSize: '86%', color: '#757295',}}>Главное меню</p>),
  getItem(<a href="/" style={{color: '#757295',}}>Личный кабинет</a>, <img src={UserIcon} alt=''/>),
  getItem(<a href="/devices" style={{color: '#757295',}}>Приборы</a>, <img src={warehouse} alt=''/>),
  getItem(<a href="/plan" style={{color: '#757295',}}>Планирование</a>, <img src={Vector1} alt=''/>),
  getItem( <a href="/employees" style={{color: '#757295',}}>Сотрудники</a>, <img src={Vector2} alt=''/>),
];
const items2 = [
  getItem(<p style={{fontSize: '86%', color: '#757295',}}>Система</p>),
  getItem( <a href="/setting" style={{color: '#757295',}}>Настройки</a>, <img src={Vector3} alt=''/>),
  getItem( <a href="/help" style={{color: '#757295',}}>Помощь</a>, <img src={Vector4} alt=''/>),
];

const items3 = [
  getItem( <a href="/off" style={{color: '#757295',}}>Выйти</a>, <img src={Vector}  alt=''/> ),
];
function App() {
  return (
    <>
      <Layout className="site-layout"
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider className="site-layout-background" width='40vh' heigh='100vh'>
          <Image1/>
          <div
            style={{
              margin: '2vh',
            }}
          ></div>
          
          <Menu mode="inline" items={items1}/>
          <div
            style={{
              margin: '20vh',
            }}
          ></div>
          
          <Menu mode="inline" items={items2}/>
          <div
            style={{
              margin: '15vh',
            }}
          ></div>
          <Menu mode="inline" items={items3}/>
        </Sider>
        <HashRouter>        
            <Routes>
              <Route exact path='/' element={<Main/>}></Route>
              <Route exact path='/devices' element={<Devices/>}></Route>
              <Route path='/devices/add' element={<Add/>}></Route>
              <Route exact path='/plan' element={<Plan/>}></Route>
              <Route path='/employees' element={<Employees/>}></Route>
              <Route path='/setting' element={<Setting/>}></Route>
              <Route path='/help' element={<Help/>}></Route>
              <Route path='/off' element={<Off/>}></Route>
              <Route exact path='/*' element={<Error/>}></Route>
            </Routes>
          </HashRouter>
      </Layout>
    </>
  );
};

export default App;
