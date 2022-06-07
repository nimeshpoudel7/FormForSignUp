import { Modal, Button, Space } from 'antd';
import React, { useState } from 'react';
import api from '../../utils/api';

const Modals = ({visible,setVisible,url}) => {
  // console.log(url)
  //  const [visibles, setVisibles] = useState(true)
   const showModal =async () => {

    const getData = await api.delete(url)
        // console.log(getData);

   setVisible(false)

  };
// console.log(visibles)
  const hideModal = () => {
   setVisible(false)
  };


  return (
    <div><Modal closeIcon title="Are you sure"  confirmLoading={visible}footer={null}visible ={visible}>
     
     <div><p>User Name={"usn"}</p></div>
      <div className="btns" ><Button danger onClick={showModal}>Delete</Button>
      
      <Button type="success" onClick={hideModal}>Cancel</Button></div>

      </Modal></div>
  )
}

export default Modals