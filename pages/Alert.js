import React from 'react';

import { ToastContainer, toast } from 'react-toastify';     
import 'react-toastify/dist/ReactToastify.css';


const notify = () => {
  toast.success('เพิ่มสินค้าสำเร็จ', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}

function App(){

  return (
    <div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </div>
  );
}
export default App;