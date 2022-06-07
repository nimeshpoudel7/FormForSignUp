import { useParams } from 'react-router-dom'
import { UserOutlined, LockOutlined, SmileOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Button, Col,Row } from 'antd';
import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { Card } from 'antd';
import Loading from '../Component/Loading/index'
// import api from "../utils/api"
const { Meta } = Card;

const Edit = () => {
    
    const params = useParams()
    

    let[data,setData]=useState({})
    const[loading,setLoading]=useState(false)

    const dbData =async()=>{
        const getData = await api.post("/singleuser",{
            id : params?.id
        })
        setData(getData.data)

    }
    // console.log(data);
    useEffect(()=>{
        dbData()
    },[])

  const onFinish = async(values) => {
    console.log(values)
setLoading(true)

    const {email,username,name}=values
          const data =await api.put('/editUser',{
      username,
      email,
      name,
      id:params?.id
  })
setLoading(false)
  }
// const {username,password,email,updatedAt}=data
const datta={
  "username":data?.username,
  "email":data?.email,
  "name":data?.name,
  "id":data?._id
}
  return (
    <div className='form-head'>

    <div className='form-body'>
    <Row justify='center' align='middle'>
      <Col span={12}>
      <h3 align='center'> Edit Your Dat </h3>
      {data.name?
      <Form
      name="normal_login"
      className="login-form"
      // initialValues={}
            autoComplete="off"
initialValues={datta}
      
       onFinish={onFinish}
      
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your Name' }]}
      >
        <Input prefix={<SmileOutlined className="site-form-item-icon" />}/>
      </Form.Item>

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      {/* <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item> */}

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email Address" />
      </Form.Item>


      <Form.Item>
        {!loading?<Button type="primary" htmlType="submit" className="login-form-button">
          Edit
        </Button>:null}
        
      </Form.Item>
    </Form>:
<Loading/>
    }
    </Col></Row>
    </div>
    </div>
  )
}

export default Edit