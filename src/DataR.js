import {Button, Select, Form, Input, DatePicker} from 'antd';
import React from 'react';
import calendar from "./calendar.svg"
import artwork1 from './Artwork1.svg';
import ellipse from './Ellipse.svg';
import ellipse1 from './Ellipse1.svg';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 10,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 5,
    },
    sm: {
      span: 8,
    },
  },
};

const DataR = () => {
  const onFinish = (fieldsValue) => {
    console.log('Received values of form: ', fieldsValue);
  };

  return (
    <Form  {...formItemLayout} onFinish={onFinish} labelAlign='left' size='middle'>
      <Form.Item name="Приборы" label={<b>Приборы</b>}>
        <Input placeholder="Название прибора ..." />
      </Form.Item>
      <div style={{margin: '-2vh'}}></div>
      <Form.Item name="Номер прибора" label={<b>Номер прибора</b>}>
        <Input placeholder="№1234" />
      </Form.Item>
      <div style={{margin: '-2vh'}}></div>
      <Form.Item name="Дата проверки" label={<b>Дата проверки</b>}>
        <RangePicker
          placeholder={[('01/01/2022'), ('01/01/2022')]}
          format={dateFormat}
          style={{width: '100%',}}
          suffixIcon={<img src={calendar} alt=''/>}
          separator={'-'}
        />
      </Form.Item>
      <div style={{margin: '5vh'}}></div>
      <Form.Item name="Тип прибора" label={<b>Тип прибора</b> }>
        <Select defaultValue={"Охрана здоровья"} suffixIcon={<img src={artwork1} alt=''/>}>
          <Option value="Охрана здоровья"/>
          <Option value="Охрана природы"/>
          <Option value="Охрана территории"/>
        </Select>
       </Form.Item>
       <div style={{margin: '-2vh'}}></div>
      <Form.Item name="Статус" label={<b>Статус</b>}>
        <Select defaultValue={"На складе"} suffixIcon={<img src={artwork1} alt=''/>} prefix={<img src={artwork1} alt=''/>}>
          <Option value="На складе">{<img src={ellipse} alt='' margin='0, 10vh'/>} На складе</Option>
          <Option value="Не на складе">{<img src={ellipse1} alt=''/>} Не на складе</Option>
        </Select>

      </Form.Item>
      <div style={{margin: '5vh'}}></div>
      <Form.Item name="Комментарий" label={<b>Комментарий</b>}>
        <TextArea placeholder="Комментарий" allowClear style={{height: '20vh',}}/>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 10,
            offset: 0,
          },
          sm: {
            span: 13,
            offset: 0,
          },
        }}
      >
        <div style={{margin: '20vh'}}></div>
        <Button type="primary" ghost style={{width: '27vh', margin: '0 3vh', fontSize: '90%',}} htmlType="submit" size='large' color='green'>СОХРАНИТЬ</Button>
        <Button type="primary" htmlType="submit" style={{width: '51vh',  fontSize: '90%',}} size='large'>СОХРАНИТЬ И ДОБАВИТЬ</Button>
      </Form.Item>
    </Form>
  );
};

export default DataR;