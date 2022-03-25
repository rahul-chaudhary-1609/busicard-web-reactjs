import React from 'react';

import {toast } from 'react-toastify';
import { toastType } from '../../constants';

const CustomToast=(props)=>{

  React.useEffect(()=>{
      if(props.info.show){
          switch(props.info.type){
            case toastType.info:
              toast.info(props.info.message);
              break;

            case toastType.success:
              toast.success(props.info.message);
              break;

            case toastType.warning:
              toast.warning(props.info.message);
              break;

            case toastType.error:
              toast.error(props.info.message);
              break;

            default:
              toast(props.info.message)
          }
      }
  },[props.info])

  return (
    <></>
  );
}

export default CustomToast;