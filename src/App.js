import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import BrowserHistory from 'react-router';
import {withRouter} from "react-router-dom";
import { Form, Input, Button, Radio, message } from 'antd';
import { UserOutlined, CheckCircleTwoTone } from '@ant-design/icons';





class App extends Component {
onFinish = (values) => {
    const params = {
      "name":values.name,
      "studentId":values.studentId,
      "grade":values.grade,
      "school":values.school,
      "major":values.major
    };
    fetch('http://localhost:3001/users', {
        method: 'post',
        body: JSON.stringify(params),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(res => res.text()
    ).then(res =>{
        if(res == 200)
        alert("chenggong");
        message.success({
            content: '提交成功！\n 可重复填写 \n 以最后一次填写为准',
            className: 'custom-class',
            duration:4,
            style: {
              marginTop: '5vh',
              alignContent:'center',
              fontSize:'18px'
            },

          });
       
    } )
    

   
};

render(){
  return (
      <div >
    <Form layout="vertical"  onFinish={this.onFinish} className="App-form">
        <Form.Item
         name="name"
         rules={[
             {
                 required: true,
                 message: '请输入姓名！',
             },
             
         ]}>
             <Input size="large" placeholder="姓名" prefix={<UserOutlined />} /></Form.Item>

        <Form.Item
           name="studentId"
           rules={[
               {
                   required: true,
                   message: '请输入学号！',
               },
           ]}>
             <Input size="large" placeholder="学号"/></Form.Item>

        <Form.Item
           name="grade"
           rules={[
               {
                   required: true,
                   message: '请输入年级！',
               },
           ]}>
             <Input size="large" placeholder="年级"/></Form.Item>
        <Form.Item
           name="school"
           rules={[
               {
                   required: true,
                   message: '请输入学院！',
               },
           ]}>
             <Input size="large" placeholder="学院"/></Form.Item>
        <Form.Item
           name="major"
           rules={[
               {
                   required: true,
                   message: '请输入专业名称！',
               },
           ]}>
             <Input size="large" placeholder="专业"/></Form.Item>
        <Button type="primary" htmlType="submit" size="large" block  onClick={this.submit} ><CheckCircleTwoTone />提交</Button>
    </Form>
</div>
  )
  }
}

export default App;
