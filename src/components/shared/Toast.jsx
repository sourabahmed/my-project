import React, { useEffect } from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function Toast(){
    useEffect(() => {
        toast.success('Component mounted successfully!');
      }, []);

    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
export default Toast;