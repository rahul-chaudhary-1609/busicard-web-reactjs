
import {toast } from 'react-toastify';

const CustomErrorHandler=(error,history)=>{
    if(error?.message){
        console.log("Error Hander", error.message)
        if([401,403].includes(error.status)){
            toast.error("Authentication Error!")
            history.push('/login')
            return;
        }else{
            toast.error(error.message);
            return;
        }
    }else{
        toast.error("Something went wrong!");
        return;
    }

}

export default CustomErrorHandler;